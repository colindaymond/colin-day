import Head from 'next/head'

const Home = () => (
  <div className="page-wrapper">
    <Head>
      <title>colin</title>
      <link rel="preload" href="/fonts/Porzellan-v1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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

        <a href="/porzellan" className="card">
          <h2>porzellan</h2>
        </a>

        <a href="https://earendil.com" target="_blank" rel="noopener noreferrer" className="card">
          <h2>earendil</h2>
        </a>

        <a href="https://soundcloud.com/coldaymond/likes" target="_blank" rel="noopener noreferrer" className="card">
          <h2>tunes</h2>
        </a>

        <a href="/verse" className="card">
          <h2>verse</h2>
        </a>

        <a href="http://www.veramolnar.com" target="_blank" rel="noopener noreferrer" className="card">
          <h2>grab bag</h2>
        </a>
      </div>
    </main>

    <style jsx>{`
      .page-wrapper {
        min-height: 100vh;
        background: url('/images/med_moon_colin.jpg') top center / cover no-repeat;
      }

      .background-text {
        position: absolute;
        opacity: 0;
      }

      main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: stretch;
        padding: 0 clamp(1.5rem, 6vw, 6rem) 2rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 2.25rem;
      }

      .card {
        color: #e0e0e0;
        text-decoration: none;
        transition: color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: white;
      }

      .card h2 {
        margin: 0;
        /* shrinks fast enough that the 2.25rem gap between links holds down to the stacking breakpoint */
        font-size: clamp(16px, calc(2.05vw - 5.5px), calc(1.4rem + 2px));
        font-weight: normal;
        white-space: nowrap;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        font-family: 'Porzellan', Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      @media (max-width: 1040px) {
        main {
          align-items: center;
          padding: 0 0 2rem 0;
        }

        .links {
          flex-direction: column;
          justify-content: flex-end;
          gap: 0.5rem;
        }

        .card h2 {
          font-size: calc(1.4rem + 2px);
        }
      }
    `}</style>

    <style jsx global>{`
      @font-face {
        font-family: 'Porzellan';
        src: url('/fonts/Porzellan-v1.woff2') format('woff2'),
          url('/fonts/Porzellan-v1.otf') format('opentype');
        font-display: swap;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
