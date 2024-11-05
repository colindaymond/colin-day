import Link from 'next/link'

import Head from 'next/head'

import Image from 'next/image'

const Home = () => (
  <div className="container">
    <Head>
      <title>c01in</title>
    </Head>

  <main>

  <Image
        src="/images/med_moon.jpg"
        alt="cards"
        width="50vw"
        loading='eager'
        />

      <p className="description">
        it's all grist for the mill
      </p>

<div className="container">

        hello! i'm colin, dad, swimmer, surfer, investor, tinkerer, human <br />
        <br />
        <a href="https://venturing.ghost.io" target="_blank" className="card">
          <h2>venturing</h2>
        </a>

        <a href="/photographs" className="card">
          <h2>photographs</h2>
        </a>

        <a href="/verse" className="card">
        <h2>verse</h2>
        </a>

        <a href="https://www.youtube.com/watch?v=z9mjK8DYE3A&t=213s" target="_blank"
          className="card">
          <h2>moving pictures</h2>
        </a>

        <a href="https://soundcloud.com/coldaymond/likes" target="_blank"
          className="card">
          <h2>tunes</h2>

        </a>

        <a href="https://www.youtube.com/watch?v=ybXrrTX3LuI" target="_blank"
          className="card">
          <h2>grab bag</h2>
        </a>

</div>

    </main>

    <footer>
    <p className="description">
    take a deep breath <br/>
    <br />
    慢走 <br/>
    <br />
    
    </p>
    </footer>

    <style jsx>{`
      .poem {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1.0rem;
        text-align: left;
        padding: 2rem;
      }

      .letter {
        font-family: 'EB Garamond', serif;
        color: #484848;

      }

      .poem-title {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1.0rem;
        text-align: left;
        font-weight: bold;
      }

      .container {
        min-height: 0vh;
        text-align: center;
        padding-top: 2.5rem;
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
      }

      main {
        padding: 0 rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      footer {
        width: 100%;
        height: 50px;
        border-top: 1px solid #ffc2f7;
        display: flex;
        justify-content: center;
        align-items: bottom;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      footer img {
        margin-bottom: 0rem;
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
        margin-top: 1rem;
      }

      .card {
        margin: 0;
        padding: 0;
        text-align: center;
        color: #ffc2f7;
        text-decoration: none;
        border: 0px solid #333333;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        display: inline-block;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #808080;
        border-color: #808080;
      }

      .card h2 {
        margin: 0;
        font-size: 1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        display: inline;
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
