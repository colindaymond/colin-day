import Link from 'next/link'

import Head from 'next/head'

import { useRouter } from "next/router"
import Login from "components/Login"

// Inside our function component


export default function Protected({ hasReadPermission }) {
  if (!hasReadPermission) {
    return <div>Access denied.</div>
  }

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
        verse
      </p>


<div className="container">



      <p className="poem">
        <b> akdeniz </b> <br />
        <br />
        and though between light and dark is small  <br />
        it explodes upon the rest of a gaze <br />
        <br />
        to find in oneself that very space  <br />
        to allow it to unfold into the umpteenth dimension <br />
        <br />
        and there in the soft bake of the sun, plumeria blossom <br />
        stamina whispering words we hear but cannot listen<br />
        <br />
        take your life into your own hands. <br />
        this is all any of us will ever need from you

        </p>

      <p className="poem">
        <b> spring </b> <br />
        <br />
        the snow melts  <br />
        water rushing between conifers <br />
        <br />
        pollen on the glass of a liquid crystal display  <br />
        up above: birdsong
        </p>

        <p className="poem">
          <b> pagi </b> <br />
          <br />
    A man awakes stuck in sticky morning to the sound of a tokay gecko   <br />
    clinging to the wicker wall above. Through the mosquito net the gecko appears   <br />
    Sketched onto parchment, all messy and smudged, and the man reaches  <br />
    up but cannot reach and blinks and it is gone.  <br />
  <br />
    He opens his mouth to breathe the Sumatran air  <br />
    tasting salty like sweat oozing thick like honey  <br />
    in between the man’s teeth, around his tongue.  <br />
    His cheeks are so filled with it he almost expects to choke but does not.  <br />
  <br />
    His thoughts skip as stones on a lake without ripples,  <br />
    clenched anchors clutch the bunched damp sheets.  <br />
    He fears a wind will soon lift him away yet the air is quiet.  <br />
    In that silence the fear becomes an acceptance and the acceptance a longing.  <br />
  <br />
    Next to him lies a silhouette of sweat, of raindrops on paper.  <br />
    A whisper of someone he once might have known, known completely  <br />
    without hesitation and without doubt and without restraint.  <br />
    Raindrops dry, silhouette fades, starch white alone.  <br />
  <br />
    He has forgotten how the moon pulls at the ocean<br />
    How the stars scream bright only to be swallowed by the yellowing blue of the sun <br />
    How he wakes in the morning or falls asleep at night <br />
    He knows only that they do and that he does and there is no coincidence in that.

          </p>


                <p className="poem">
                  <b> the virus is a portal </b> <br />
                  <br />
                  all the numbers we use to measure human behaviour<br />
                  like gross domestic product, share prices and paychecks<br />
                  are just ideas defined by men to reduce us to numbers<br />
                  <br />
                  how can they be real when &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 <br />
                  <br />
                  hours of knee-bleeding <br />
                  toilet cleaning gets you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  $58 (- taxes)<br />
                  <br />
                  but men in suits can <br /> unilaterally create
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                   $2,300,000,000,000 <br />
                  <br />
                  instantly and out of ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nothing <br />
                  <br />
                  you don't count hugs laughs or tears<br />
                  maybe now we remember why
                  </p>

</div>

<footer>
<Link href="/">
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
