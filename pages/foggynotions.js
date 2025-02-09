import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"
import { marked } from 'marked'

class Post {
  constructor(content) {
    this.content = content;
    this.date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  toHTML() {
    return marked(this.content);
  }
}

export default function Foggynotions() {
  const posts = [
    new Post(`
# My First Venture
      
This is an example post using *markdown*.
- Point 1
- Point 2
    `),
    new Post(`
## Another Adventure
      
Here's another post with **bold** text and a [link](https://example.com).
    `),
    new Post(`
## Daydream

Daydream is a new way of giving power to people to create things online that they own and control.

It's fundamental tech stack are language models, the world wide web, and the human voice.

We think you will want to replace Squarespace, Wix, Wordpress with Daydream, but we hope that together we build something to replace platform-dominated social media that is engineering vice with inhumane algorithms.

`)
  ];

  return (
    <div id="wrapper">
      <Head>
        <title>foggy notions</title>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </Head>

      <header id="blog-header">
        <div className="inner">
          <h1 className="blog-name"><a href="/">foggy notions</a></h1>
        </div>
      </header>

      <main className="content" role="main">
        <div id="index" className="container">
          {posts.map((post, index) => (
            <article key={index} className="post no-image">
              <div className="inner">
                <header className="post-header">
                  <h2 className="post-title">{post.content.split('\n')[0].replace('#', '').trim()}</h2>
                  <span className="post-meta">
                    <time>{post.date}</time>
                  </span>
                  <div className="clear"></div>
                </header>
                <section className="post-excerpt">
                  <div dangerouslySetInnerHTML={{ __html: post.toHTML() }} />
                </section>
              </div>
            </article>
          ))}
        </div>
      </main>

      <style jsx global>{`
        body {
          font-family: 'Open Sans', sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'EB Garamond', serif;
          letter-spacing: -1px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .post {
          margin-bottom: 4rem;
        }

        .post-title {
          font-size: 2rem;
          margin: 0;
        }

        .post-meta {
          color: #666;
          font-size: 0.9rem;
        }

        .post-excerpt {
          margin-top: 1rem;
        }

        .inner {
          padding: 1rem 0;
        }

        .clear {
          clear: both;
        }

        #blog-header {
          padding: 2rem 0;
          border-bottom: 1px solid #eee;
        }

        .blog-name {
          font-family: 'EB Garamond', serif;
          letter-spacing: -1px;
          font-size: 2rem;
          margin: 0;
          text-align: center;
        }

        .blog-name a {
          color: #1a1a1a;
          text-decoration: none;
        }

        .blog-name a:hover {
          color: #ff00e7;
        }
      `}</style>
    </div>
  )
} 
