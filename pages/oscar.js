import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router"
import Login from "login"
import Image from 'next/image'

export default function Protected({ hasReadPermission }) {

  const router = useRouter()

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }


  return (


  <div className="container">
    <Head>
      <title>c01in</title>
    </Head>


    <main>


      <p className="description">
        oscar cosmo hanna
      </p>


<div className="container">

      <p className="poem">
        <b> june 19 2021 </b> <br />
        <br />
        <Image
          src="/images/IMG_4373.jpeg"
          alt="oscar1"
          width={280}
          height={360}
          layout='intrinsic'
          quality={100}
              />

        <br />< br />
        when oscar is at the beach he grabs fistfuls of sand and doesn't let them go.

        </p>

        <p className="poem">
          <b> june 18 2021 </b> <br />
          <br />
          <Image
            src="/images/IMG_4379.jpeg"
            alt="oscar3"
            width={280}
            height={360}
            layout='intrinsic'
            quality={100}
                />

          <br /><br />
          oscar has mickey mouse wrists.

          </p>

          <p className="poem">
            <b> may 8 2021 </b> <br />
            <br />
            <Image
              src="/images/IMG_4238.jpg"
              alt="oscar2"
              width={280}
              height={360}
              layout='intrinsic'
              quality={100}
                  />

            <br /><br />
            oscar likes his coffee with foam.

            </p>

</div>

<footer>
<Link href="https://www.c01.in">
<a>
&#127962;
</a>
</Link>
</footer>

    </main>


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
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #ffc2f7;
        display: flex;
        justify-content: center;
        align-items: bottom;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
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
        font-size: 3rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.1rem;
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

      .h2 {
        text-align: right;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #333333;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #007dfa;
        border-color: #007dfa;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
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
}
