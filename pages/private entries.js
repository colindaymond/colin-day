import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router"
import Login from "login"
import { marked } from 'marked'

class Poem {
  constructor(content) {
    this.content = content;
  }

  toHTML() {
    return marked(this.content);
  }
}

export default function Protected({ hasReadPermission }) {
  const router = useRouter()

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }

  const poems = [
    new Poem(`
**may 2023, boulder CO**

Tall green standing pine  
Darting songbird cuts blue sky  
Pinecone hanging still



The rains of late spring  
Eyes sharpened by sleep and breath  
Dew on the grass blade
`),

new Poem(`
**supernovae ember**

*By looking at the proportions of the isotopes in the cold, dead ember which we are,  
we can discover what the furnace was like in which the stuff of which we are was formed.   
That furnace was like the stars, and so it is very likely that our elements were  
"made" in the stars and spit out in the explosions which we call novae and supernovae.*

-Richard Feynman


I shall be the poet Feynman challenged us to be  
Reminding us we are but the belching of forgotten stars  
Broken down into atoms; reassembled  
Kinking folding amino acid chains  
Proteins created with precise instructions  
From a double helix ribbon of complements  


And then there is the thin gold band on my finger,  
forged exclusively by colliding neutron stars   
or the massive explosion of a collapsing star, a supernova. 
Rare on the scale of the universe, but each pair of colliding stars  
creating up to thirteen Earth masses of gold.
`),


new Poem(`
**nov 29 2024**

atoms of air between graphite and paper  
the pencil hovers, wavers,  
wisdom hidden within its tip  

unfurl your secrets, pencil  
point me in that cardinal direction  
towards where heart and reason meet without contradiction  

lead me away from that bitter path  
where i, like weiwei did, holding that which is most precious to me, let go ---  
ceramic shards at my feet
`),

    new Poem(`
**akdeniz**

and though between light and dark is small  
it explodes upon the rest of a gaze  

to find in oneself that very space  
to allow it to unfold into the umpteenth dimension  

and there in the soft bake of the sun, plumeria blossom  
stamina whispering words we hear but cannot listen  

take your life into your own hands.  
this is all any of us will ever need from you
`),

    new Poem(`
**spring in styria**

the snow melts  
water rushing between conifers  

pollen on the glass of a liquid crystal display  
up above: birdsong
`),

    new Poem(`
**pagi**

A man awakes stuck in sticky morning to the sound of a tokay gecko  
clinging to the wicker wall above. Through the mosquito net the gecko appears  
Sketched onto parchment, all messy and smudged, and the man reaches  
up but cannot reach and blinks and it is gone.  

He opens his mouth to breathe the Sumatran air  
tasting salty like sweat oozing thick like honey  
in between the man's teeth, around his tongue.  
His cheeks are so filled with it he almost expects to choke but does not.  

His thoughts skip as stones on a lake without ripples,  
clenched anchors clutch the bunched damp sheets.  
He fears a wind will soon lift him away yet the air is quiet.  
In that silence the fear becomes an acceptance and the acceptance a longing.  

Next to him lies a silhouette of sweat, of raindrops on paper.  
A whisper of someone he once might have known, known completely  
without hesitation and without doubt and without restraint.  
Raindrops dry, silhouette fades, starch white alone.  

He has forgotten how the moon pulls at the ocean  
How the stars scream bright only to be swallowed by the yellowing blue of the sun  
How he wakes in the morning or falls asleep at night  
He knows only that they do and that he does and there is no coincidence in that.
`),

    new Poem(`
**figures**

all the numbers we use to measure human behaviour  
like gross domestic product, share prices and paychecks  
are just ideas defined by men to reduce us to numbers  

how can they be real when &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8  

hours of knee-bleeding toilet cleaning gets you 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $58 (- taxes)  

but men in suits can  
unilaterally create &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2,300,000,000,000  

instantly and out of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nothing  

you don't count hugs laughs or tears  

maybe now we remember why
`),

    new Poem(`
**if**

On this grey summer day  
On this Atlantic moored island  
On the 28th of June, 2017  

Will my smile still reach my eyes?  
Will I still float in the vibrations of this blue world?  
Or will sorrow swallow my throat?  

We are all given but a matchflame

In the end I want songs fire and waves  
A good Sunday morning cuddle  
The butter of asphalt from a dervish  
The cotton of our world and the love that stains it
`)
  ];

  return (
    <div className="container">
      <Head>
        <title>c01in</title>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,600,700" rel="stylesheet" />
      </Head>

      <main>
        <p className="description">verse</p>

        <div className="container">
          {poems.map((poem, index) => (
            <article key={index} className="poem">
              <div className="inner">
                <section className="poem-content">
                  <div dangerouslySetInnerHTML={{ __html: poem.toHTML() }} />
                </section>
              </div>
            </article>
          ))}
        </div>

        <footer>
          <br />
          <Link href="https://www.c01.in">
            <a>&#127962;</a>
          </Link>
        </footer>
      </main>

      <style jsx>{`
        .poem {
          margin-bottom: 2rem;
          font-family: 'EB Garamond', serif;
          font-size: 1.1rem;
          text-align: left;
          padding: 2rem;
          line-height: 1.6;
        }

        .poem-content {
          margin-top: 1rem;
        }

        .poem-content p {
          margin: 0;
          line-height: 1.6;
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

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description {
          line-height: 1.5;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'EB Garamond', serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
