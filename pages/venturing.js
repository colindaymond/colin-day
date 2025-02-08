import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"
import Login from "login"


class Post {
  constructor(content) {
    this.content = content;
    this.date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  toHTML() {
    // You'll need to install marked with: npm install marked
    const marked = require('marked');
    return marked(this.content);
  }
}

export default function Venturing() {
  const [posts] = useState([
    new Post(`
# My First Venture
      
This is an example post using *markdown*.
- Point 1
- Point 2
    `),
    new Post(`
## Another Adventure
      
Here's another post with **bold** text and a [link](https://example.com).
    `)
  ]);

  return (
    <div>
      <Head>
        <title>Venturing - Your Name</title>
      </Head>
      <article>
        <h1>Venturing</h1>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="date">{post.date}</div>
            <div dangerouslySetInnerHTML={{ __html: post.toHTML() }} />
          </div>
        ))}
      </article>
    </div>
  )
} 