import { Redis } from '@upstash/redis'

const redisUrl = process.env.storage_KV_REST_API_URL || process.env.KV_REST_API_URL
const redisToken = process.env.storage_KV_REST_API_TOKEN || process.env.KV_REST_API_TOKEN
const googleSheetsScriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL

const redis = redisUrl && redisToken
  ? new Redis({ url: redisUrl, token: redisToken })
  : null

async function writeToGoogleSheet({ email, source, subscribedAt }) {
  if (!googleSheetsScriptUrl) return { attempted: false }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3500)

  try {
    const response = await fetch(googleSheetsScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ email, source, subscribedAt }),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Google Sheets script failed with status ${response.status}`)
    }

    return { attempted: true, ok: true }
  } catch (error) {
    return { attempted: true, ok: false, error }
  } finally {
    clearTimeout(timeout)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, source = 'foggynotions.day', subscribedAt = new Date().toISOString() } = req.body || {}

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    const normalizedEmail = email.toLowerCase()

    // 1) Preferred path: write directly to Google Sheet via Apps Script webhook (if configured)
    const sheetResult = await writeToGoogleSheet({
      email: normalizedEmail,
      source,
      subscribedAt,
    })

    if (sheetResult.attempted && sheetResult.ok) {
      return res.status(200).json({ message: 'Subscribed successfully (sheet)' })
    }

    // 2) Fallback path: Upstash Redis
    if (redis) {
      const isMember = await redis.sismember('foggynotions-subscribers', normalizedEmail)

      if (isMember) {
        return res.status(200).json({ message: 'Already subscribed', alreadySubscribed: true })
      }

      await redis.sadd('foggynotions-subscribers', normalizedEmail)
      return res.status(200).json({ message: 'Subscribed successfully' })
    }

    if (sheetResult.attempted && !sheetResult.ok) {
      console.error('Subscribe sheet write failed:', sheetResult.error)
      return res.status(502).json({ error: 'Subscribe backend unavailable (sheet write failed)' })
    }

    return res.status(503).json({ error: 'Subscribe service not configured' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
