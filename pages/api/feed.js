import { posts } from '../../data/posts'

export default function handler(req, res) {
  const baseUrl = 'https://www.foggynotions.day'

  const publishedPosts = posts.filter(post => post.isPublished)

  const rssItems = publishedPosts.map(post => {
    const title = post.getTitle()
    const excerpt = post.getExcerpt(300)
    const pubDate = new Date(post.date).toUTCString()

    return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${baseUrl}</link>
      <description><![CDATA[${excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid>${baseUrl}#${title.toLowerCase().replace(/\s+/g, '-')}</guid>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>foggy notions</title>
    <link>${baseUrl}</link>
    <description>written by colin daymond hanna</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/feed" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

  res.setHeader('Content-Type', 'application/rss+xml')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.status(200).send(rss)
}
