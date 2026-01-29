import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.storage_KV_REST_API_URL,
  token: process.env.storage_KV_REST_API_TOKEN,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    const normalizedEmail = email.toLowerCase()

    // Check if already subscribed using a set
    const isMember = await redis.sismember('foggynotions-subscribers', normalizedEmail)

    if (isMember) {
      return res.status(200).json({ message: 'Already subscribed', alreadySubscribed: true })
    }

    // Add new subscriber to set
    await redis.sadd('foggynotions-subscribers', normalizedEmail)

    return res.status(200).json({ message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
