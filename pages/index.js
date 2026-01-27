import Link from 'next/link'

import Head from 'next/head'

const Home = () => (
  <div className="page-wrapper">
    <Head>
      <title>colin</title>
    </Head>

    <div className="background-text">
      慢走
    </div>

    <main>
      <div className="links">
        <a href="https://www.foggynotions.day" className="card">
          <h2>foggy notions</h2>
        </a>

        <a href="/photographs" className="card">
          <h2>photographs</h2>
        </a>

        <a href="/verse" className="card">
          <h2>verse</h2>
        </a>

        <a href="https://soundcloud.com/coldaymond/likes" target="_blank" className="card">
          <h2>tunes</h2>
        </a>

        <a href="https://earendil.com" target="_blank" className="card">
          <h2>grab bag</h2>
        </a>
      </div>
    </main>

    <style jsx>{`
      .page-wrapper {
        min-height: 100vh;
        background-image: url('/images/med_moon_colin.jpg');
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        position: relative;
      }

      .background-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 2rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        z-index: 0;
        opacity: 0;
      }

      main {
        position: relative;
        z-index: 1;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding-bottom: 2rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
      }

      .card {
        color: white;
        text-decoration: none;
        transition: color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #cccccc;
      }

      .card h2 {
        margin: 0;
        font-size: 1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
    `}</style>

    <style jsx global>{`
      html,
      body,
      #__next {
        padding: 0;
        margin: 0;
        height: 100%;
        min-height: 100vh;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

export default Home
