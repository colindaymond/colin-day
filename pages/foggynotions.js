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
## daydream

daydream is a new way of giving power to people to create things online that they own and control.

Our tech stack consists of large language models, IPv6, SMTP, other open standards of the internet, and authentic human creativity.

We believe the human voice should be at the center of human computer interaction.

Our mission is to empower people to own the online versions of themselves with ease.

We want to unmediate social media.


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
          font-family: 'EB Garamond', serif;
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
          font-size: 1.1rem;
        }

        .post-title {
          font-size: 2rem;
          margin: 0;
          color: #696969;
        }

        .post-meta {
          color: #2b2b2b;
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
