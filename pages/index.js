import Link from 'next/link'

import Head from 'next/head'

import Image from 'next/image.js'

const Home = () => (
  <div className="container">
    <Head>
      <title>c01in</title>
      <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/call-me-hand_emoji-modifier-fitzpatrick-type-3_1f919-1f3fc_1f3fc.png"></link>
    </Head>

  <main>

      <Image
      src="/public/images/hobbes-thinking1.jpg"
      alt="thinkinghobbes"
      width={150}
      height={258}
      />


      <p className="description">
        it's all grist for the mill
      </p>

      <div className="grid">
        <a href="https://www.venturing.io" target="_blank" className="card">
          <h3>words</h3>
          <p>words from my blog, venturing</p>
        </a>

        <a href="/verse" className="card">
        <h3>verse</h3>
        <p>
          words, new arrangements
        </p>
        </a>

        <a href="https://www.venturing.io/photographs/" target="_blank" className="card">
          <h3>photographs</h3>
          <p>souvenirs from the journey</p>
        </a>

        <a href="https://www.youtube.com/watch?v=z9mjK8DYE3A&t=213s" target="_blank"
          className="card">
          <h3>moving pictures</h3>
          <p>on air: yangshuo, china, 2001</p>
        </a>

        <a href="https://soundcloud.com/coldaymond/likes" target="_blank"
          className="card">
          <h3>tunes</h3>
          <p>
            music i like maybe you like too
          </p>
        </a>

        <a href="/grab-bag"
          className="card">
          <h3>grab bag</h3>
          <p>
            random makes me smile
          </p>
        </a>

      </div>

    </main>

    <footer>
        made with &#129305;&#127996; and jamstack in berlin
    </footer>

    <style jsx>{`
      .poem {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1.0rem;
        text-align: left;
        padding: 2rem;
      }

      .poem-title {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1.0rem;
        text-align: left;
        font-weight: bold;
      }

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
      }

      main {
        padding: 2rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 2px solid #ffc2f7;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      footer img {
        margin-left: 0rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
        color: #7EA6F8
      }

      .title a {
        color: #ffc2f7;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        color: #ffc2f7;
        margin: 0;
        line-height: 1.15;
        font-size: 3.5rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 0.9rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 2rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: center;
        color: inherit;
        text-decoration: none;
        border: 0px solid #333333;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #7EA6F8;
        border-color: #7EA6F8;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .card p {
        margin: 0;
        font-size: 1.0rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
