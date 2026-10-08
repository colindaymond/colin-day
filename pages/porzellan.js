import Head from 'next/head'
import { useState } from 'react'

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER = 'abcdefghijklmnopqrstuvwxyz'
const FIGURES = '0123456789'
const EXTRAS = 'ÄÖÜẞäöüß'
const MARKS = '&?!@#$%€+−×÷=<>~_()«»‹›„“”‚‘’"\',.:;'

const SETS = [
  ['uppercase', UPPER],
  ['lowercase', LOWER],
  ['figures', FIGURES],
  ['umlauts', EXTRAS],
  ['marks', MARKS],
]

const FONT_OTF = '/fonts/Porzellan-v1.otf'
const FONT_WOFF2 = '/fonts/Porzellan-v1.woff2'

const codepoint = (ch) =>
  'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')

export default function Porzellan() {
  const [glyph, setGlyph] = useState('Q')
  const [size, setSize] = useState(72)

  return (
    <div className="page">
      <Head>
        <title>Porzellan — a typeface by colin daymond hanna</title>
        <meta
          name="description"
          content="Porzellan, a handcrafted typeface drawn by Colin Daymond Hanna in Vienna. Free to download."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Porzellan" />
        <meta
          property="og:description"
          content="A handcrafted typeface drawn by Colin Daymond Hanna in Vienna."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&display=swap"
        />
        <link rel="preload" href={FONT_WOFF2} as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <header className="top serif">
        <a href="/">colin.day</a>
        <a href={FONT_OTF} download="Porzellan v1.otf">download ↓</a>
      </header>

      <section className="hero">
        <h1 className="p">Porzellan</h1>
        <p className="serif sub">
          a handcrafted typeface drawn by colin daymond hanna in vienna
        </p>
      </section>

      <section className="specimen">
        <div className="stage" aria-live="polite">
          <span className="p big">{glyph}</span>
          <span className="serif meta">{codepoint(glyph)}</span>
        </div>

        <div className="sets">
          {SETS.map(([label, chars]) => (
            <div className="set" key={label}>
              <div className="serif label">{label}</div>
              <div className="grid">
                {[...chars].map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    className={'p cell' + (ch === glyph ? ' on' : '')}
                    onMouseEnter={() => setGlyph(ch)}
                    onFocus={() => setGlyph(ch)}
                    onClick={() => setGlyph(ch)}
                    aria-label={codepoint(ch)}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pangrams">
        <p className="p line xl">Porzellangasse, 1090, Wien</p>
        <p className="p line l">Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich</p>
        <p className="p line m">The quick brown fox jumps over the lazy dog — 0123456789</p>
      </section>

      <section className="tester">
        <div className="serif label row">
          <span>try it</span>
          <label className="size">
            <input
              type="range"
              min="24"
              max="200"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              aria-label="font size"
            />
            <span>{size}px</span>
          </label>
        </div>
        <div
          className="p type"
          contentEditable
          suppressContentEditableWarning
          spellCheck={false}
          style={{ fontSize: size }}
        >
          slow walk, foggy notions
        </div>
      </section>

      <section className="download">
        <a className="p button" href={FONT_OTF} download="Porzellan v1.otf">
          Download
        </a>
        <p className="serif small">
          Porzellan v1 · OpenType (.otf) · 70 KB · free
          <br />
          <a href="https://github.com/colindaymond/porzellan" target="_blank" rel="noopener noreferrer">
            github.com/colindaymond/porzellan
          </a>
        </p>
      </section>

      <footer className="serif small foot">drawn in vienna</footer>

      <style jsx>{`
        .page {
          --ink: #1b1b1f;
          --muted: #8a877f;
          --line: #e4e0d6;
          --paper: #f7f5ef;
          --accent: #3a3a3a;
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          padding: 0 clamp(1.25rem, 5vw, 5rem);
        }

        .p {
          font-family: 'Porzellan', serif;
          font-weight: normal;
        }

        .serif {
          font-family: 'EB Garamond', Garamond, 'Times New Roman', serif;
          letter-spacing: 0.01em;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          color: var(--accent);
        }

        .top {
          display: flex;
          justify-content: space-between;
          padding: 1.75rem 0;
          font-size: 1.05rem;
          color: var(--muted);
        }

        .hero {
          min-height: min(78vh, 46rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        h1 {
          font-size: clamp(5rem, 19vw, 18rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
        }

        .sub {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: var(--muted);
        }

        .specimen {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
          gap: clamp(2rem, 5vw, 5rem);
          padding: 4rem 0 6rem;
          border-top: 1px solid var(--line);
        }

        .stage {
          position: sticky;
          top: 2rem;
          align-self: start;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
          background: #fbfaf6;
        }

        .big {
          font-size: clamp(10rem, 28vw, 26rem);
          line-height: 1;
          color: var(--accent);
        }

        .meta {
          position: absolute;
          left: 1rem;
          bottom: 0.8rem;
          font-size: 0.9rem;
          color: var(--muted);
        }

        .set + .set {
          margin-top: 2.5rem;
        }

        .label {
          font-size: 1rem;
          color: var(--muted);
          text-transform: lowercase;
          margin-bottom: 0.9rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(3.6rem, 1fr));
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .cell {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--ink);
          background: none;
          border: 0;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          cursor: default;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .cell:hover,
        .cell:focus-visible,
        .cell.on {
          background: var(--accent);
          color: var(--paper);
          outline: none;
        }

        .pangrams {
          padding: 6rem 0;
          border-top: 1px solid var(--line);
        }

        .line {
          line-height: 1.1;
          overflow-wrap: anywhere;
        }

        .line + .line {
          margin-top: 2.5rem;
        }

        .xl {
          font-size: clamp(2.5rem, 6.2vw, 7rem);
        }

        .l {
          font-size: clamp(2rem, 5vw, 4.5rem);
        }

        .m {
          font-size: clamp(1.4rem, 2.6vw, 2.2rem);
          color: var(--muted);
        }

        .tester {
          padding: 4rem 0 6rem;
          border-top: 1px solid var(--line);
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .size {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .size span {
          width: 3.5rem;
          text-align: right;
        }

        input[type='range'] {
          width: 10rem;
          accent-color: var(--ink);
        }

        .type {
          min-height: 1.3em;
          line-height: 1.15;
          outline: none;
          padding: 1rem 0;
          border-bottom: 1px solid var(--line);
          caret-color: var(--accent);
          overflow-wrap: anywhere;
        }

        .download {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
          padding: 7rem 0 5rem;
          border-top: 1px solid var(--line);
          text-align: center;
        }

        .button {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1;
          padding: 0.35em 0.9em 0.45em;
          border: 1px solid var(--ink);
          border-radius: 999px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .button:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .small {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.7;
        }

        .foot {
          text-align: center;
          padding: 2rem 0 2.5rem;
        }

        @media (max-width: 800px) {
          .specimen {
            grid-template-columns: 1fr;
          }

          .stage {
            position: relative;
            top: 0;
            max-width: 26rem;
            width: 100%;
            margin: 0 auto;
          }

          .grid {
            grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
          }

          .cell {
            font-size: 1.6rem;
          }

          input[type='range'] {
            width: 6rem;
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: 'Porzellan';
          src: url('${FONT_WOFF2}') format('woff2'), url('${FONT_OTF}') format('opentype');
          font-display: swap;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #f7f5ef;
          -webkit-font-smoothing: antialiased;
        }

        ::selection {
          background: #3a3a3a;
          color: #f7f5ef;
        }
      `}</style>
    </div>
  )
}
