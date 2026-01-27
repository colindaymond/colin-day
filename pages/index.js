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
        align-items: flex-end;
        padding: 0 2rem 2rem 0;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2.5rem;
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
        font-size: 1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
    `}</style>

    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
