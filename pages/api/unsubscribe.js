import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
  const { email } = req.query

  if (!email) {
    return res.status(400).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Unsubscribe</title></head>
        <body style="font-family: 'EB Garamond', Georgia, serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0;">
          <p>Email required to unsubscribe.</p>
        </body>
      </html>
    `)
  }

  try {
    await redis.srem('foggynotions-subscribers', email.toLowerCase())

    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribed</title>
          <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" rel="stylesheet">
        </head>
        <body style="font-family: 'EB Garamond', Georgia, serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; flex-direction: column;">
          <p style="font-size: 1.2rem;">You've been unsubscribed.</p>
          <a href="https://foggynotions.day" style="color: #ffc2f7; margin-top: 1rem;">back to foggy notions</a>
        </body>
      </html>
    `)
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return res.status(500).send('Something went wrong')
  }
}
