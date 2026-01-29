import { Redis } from '@upstash/redis'
import { Resend } from 'resend'

const redis = new Redis({
  url: process.env.storage_KV_REST_API_URL,
  token: process.env.storage_KV_REST_API_TOKEN,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Simple auth - check for secret key
  if (req.headers.authorization !== `Bearer ${process.env.NEWSLETTER_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { subject, html } = req.body

  if (!subject || !html) {
    return res.status(400).json({ error: 'Subject and html content required' })
  }

  try {
    // Get all subscribers from the set
    const subscribers = await redis.smembers('foggynotions-subscribers')

    if (!subscribers || subscribers.length === 0) {
      return res.status(200).json({ sent: 0, message: 'No subscribers' })
    }

    const results = []
    const errors = []

    for (const email of subscribers) {
      const unsubscribeUrl = `https://foggynotions.day/api/unsubscribe?email=${encodeURIComponent(email)}`

      try {
        await resend.emails.send({
          from: 'foggy notions <hello@foggynotions.day>',
          to: email,
          subject,
          html: `
            ${html}
            <br><br>
            <p style="color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 1rem; margin-top: 2rem;">
              <a href="${unsubscribeUrl}" style="color: #888;">unsubscribe</a>
            </p>
          `
        })
        results.push(email)
      } catch (err) {
        errors.push({ email, error: err.message })
      }
    }

    return res.status(200).json({
      sent: results.length,
      failed: errors.length,
      errors: errors.length > 0 ? errors : undefined
    })
  } catch (error) {
    console.error('Send newsletter error:', error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
