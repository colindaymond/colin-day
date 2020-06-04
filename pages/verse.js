import Link from 'next/link'

import Head from 'next/head'

export default function verse() {
  return (


  <div className="container">
    <Head>
      <title>c01in</title>
      <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/call-me-hand_emoji-modifier-fitzpatrick-type-3_1f919-1f3fc_1f3fc.png"></link>
    </Head>


    <main>
      <p className="description">
        verse
      </p>


<div className="container">

  <p className="poem">
  <b> u-bahn </b> <br />
  <br />
  I.<br />
  It’s not as if the silence frightens me<br />
  with its complicated pregnancies,<br />
  with its memories of sun-stained mornings,<br />
  its heavy snowy regrets.<br />
  It’s not as if the silence frightens me<br />
<br />
  II.<br />
  Sometimes when the air is still<br />
  I remember the wind,<br />
  the crinkle of it between leaves,<br />
  the high whisper of it in my ears.<br />
  And the white door slams shut<br />
  slowly but quickly and all on its own<br />
<br />
  III.<br />
  I envy the bees that dive and float,<br />
  hovering still and now darting away<br />
  It’s like they’ve managed to solve<br />
  how to hold in their tiny minds both <br />
  purpose and contentment<br />
  without contradiction

            </p>

      <p className="poem">
        <b> akdeniz </b> <br />
        <br />
        and in between light and dark is small  <br />
        it explodes upon the rest of a gaze <br />
        <br />
        to find in oneself that very space  <br />
        to allow it to unfold into the umpteenth dimension <br />
        <br />
        and in its edges and corners, flowers blossom <br />
        speaking in words we hear but don't listen<br />
        <br />
        the rush of the world. all at once, <br />
        the soft bake of the sun
        </p>

      <p className="poem">
        <b> spring </b> <br />
        <br />
        the snow melts  <br />
        water rushing between the trees <br />
        <br />
        pollen on the glass  <br />
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
    As the sweat dries beside him the silhouette fades.  <br />
  <br />
    He has forgotten why the moon pulls at the ocean tides  <br />
    or why the stars scream bright only to be swallowed by the yellowing blue of the sun  <br />
    or why he wakes in the morning or falls to sleep at night.   <br />
    He knows only that they do and that he does and there is no coincidence in that.

          </p>

</div>

<h2>
<Link href="/">
<a>
&#127962;&#65039;
</a>
</Link>
</h2>

    <footer>
    &#129305;&#127996;
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
        border-top: 1px solid #ff00e7;
        display: flex;
        justify-content: center;
        align-items: center;
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
        color: #ff00e7;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        color: #ff00e7;
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
