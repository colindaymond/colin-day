import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router"
import Login from "login"
import { marked } from 'marked'

class Poem {
  constructor(content, options = {}) {
    this.content = content;
    this.date = options.date || "";
    this.title = options.title || "";
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
## may 2023, boulder CO

Tall green standing pine  
Darting songbird cuts blue sky  
Pinecone hanging still

---

The rains of late spring  
Eyes sharpened by sleep and breath  
Dew on the grass blade
`, { 
      date: "May 2023",
      title: "boulder CO"
    }),

    new Poem(`
## nov 29 2024

atoms of air between graphite and paper  
the pencil hovers, wavers,  
wisdom hidden within its tip  

unfurl your secrets, pencil  
point me in that cardinal direction  
towards where heart and reason meet without contradiction  

lead me away from that bitter path  
where i, like weiwei did, holding that which is most precious to me, let go ---  
ceramic shards at my feet
`, {
      date: "Nov 29 2024",
      title: "untitled"
    }),

    new Poem(`
## akdeniz

and though between light and dark is small  
it explodes upon the rest of a gaze  

to find in oneself that very space  
to allow it to unfold into the umpteenth dimension  

and there in the soft bake of the sun, plumeria blossom  
stamina whispering words we hear but cannot listen  

take your life into your own hands.  
this is all any of us will ever need from you
`, {
      date: "2024",
      title: "akdeniz"
    }),

    new Poem(`
## spring in styria

the snow melts  
water rushing between conifers  

pollen on the glass of a liquid crystal display  
up above: birdsong
`, {
      date: "2024",
      title: "spring in styria"
    }),

    new Poem(`
## pagi

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
`, {
      date: "2024",
      title: "pagi"
    }),

    new Poem(`
## the virus is a portal

all the numbers we use to measure human behaviour  
like gross domestic product, share prices and paychecks  
are just ideas defined by men to reduce us to numbers  

how can they be real when &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8  

hours of knee-bleeding  
toilet cleaning gets you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $58 (- taxes)  

but men in suits can  
unilaterally create &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2,300,000,000,000  

instantly and out of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nothing  

you don't count hugs laughs or tears  

maybe now we remember why
`, {
      date: "2020",
      title: "the virus is a portal"
    }),

    new Poem(`
## if

If on this grey summer day  
If on this Atlantic moored island  
On the 28th of June, 2017  

Will my smile still reach my eyes?  
Will I still float listlessly in the vibrations of this blue world?  
Or will sorrow swallow my throat?  

We are all given but a matchflame  
A glassbottle lightflick floating on the ocean of time  
Each moment beckoning attention  

What is a shortened flicker but a flicker?  
Where from comes the angst?  
In the end I want songs fire and waves  

A good Sunday morning cuddle  
The butter of asphalt from a dervish  
The cotton of our world and the love that stains it
`, {
      date: "2017",
      title: "if"
    })
  ];

  return (
    <div className="container">
      <Head>
        <title>c01in</title>
      </Head>

      <main>
        <p className="description">verse</p>

        <div className="container">
          {poems.map((poem, index) => (
            <article key={index} className="poem">
              <div className="inner">
                <header className="poem-header">
                  <span className="poem-meta">
                    <time>{poem.date}</time>
                  </span>
                  <h2 className="poem-title">{poem.title}</h2>
                  <div className="clear"></div>
                </header>
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-size: 1.0rem;
          text-align: left;
          padding: 2rem;
        }

        .poem-title {
          font-size: 1.5rem;
          margin: 0;
          margin-top: -0.3rem;
          line-height: 1.2;
          color: #696969;
        }

        .poem-meta {
          color: #ffc2f7;
          font-size: 0.9rem;
          display: block;
          margin-bottom: -0.5rem;
          line-height: 0.6;
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

        .clear {
          clear: both;
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
