import Link from 'next/link'

import Head from 'next/head'

import Image from 'next/image'


export default function photographs() {
  return (





<div className="container">

<main>

<p className="h3">
  ísland ↧
</p>

    <Image
        src="/images/COBW3595-R1-03-4.JPG"
        alt="iceland2"
        width={480}
        height={720}
        layout='intrinsic'
        quality={100}
            />


            <br />
            <br />
            <br />

            <Image
                  src="/images/COBW3595-R1-02-3.JPG"
                  alt="iceland1"
                  width={480}
                  height={720}
                  layout='intrinsic'
                  quality={100}
                  priority='true'
                  />

            <p className="h3">
              wien ↧
            </p>

            <Image
                src="/images/000044210007.jpg"
                alt="wien1"
                width={480}
                height={720}
                layout='intrinsic'
                quality={100}
                    />

                    <br />
                    <br />
                    <br />

              <Image
                src="/images/000044210006.jpg"
                alt="wien2"
                width={480}
                height={720}
                layout='intrinsic'
                quality={100}
                      />

                      <br />
                      <br />
                      <br />

                      <Image
                        src="/images/000044210012 2.jpg"
                        alt="banana"
                        width={480}
                        height={720}
                        layout='intrinsic'
                        quality={100}
                              />

                              <br />
                              <br />
                              <br />


                                <Image
                        src="/images/000044210019.jpg"
                        alt="dots"
                        width={960}
                        height={636}
                        layout='intrinsic'
                        quality={100}
                              />


                                                    <br />
                                                    <br />
                                                    <br />



      <p className="h3">
            atlas ↧
                    </p>

          <Image
            src="/images/COBW3594-R1-18-19.jpeg"
            alt="atlas1"
            width={960}
            height={636}
            layout='intrinsic'
            quality={100}
                />

                <br />
                <br />
                <br />

          <Image
            src="/images/COBW3594-R1-16-17 (1).jpeg"
            alt="atlas1"
            width={960}
            height={636}
            layout='intrinsic'
            quality={100}
                />

                <p className="h3">
                      albion ↧
                              </p>

                              <Image
                                src="/images/COBW3595-R1-28-29.jpeg"
                                alt="atlas1"
                                width={960}
                                height={636}
                                layout='intrinsic'
                                quality={100}
                                    />

                                    <br />
                                    <br />
                                    <br />

                                    <Image
                                      src="/images/COBW3593-R1-36-37.jpeg"
                                      alt="atlas1"
                                      width={960}
                                      height={636}
                                      layout='intrinsic'
                                      quality={100}
                                          />

                                          <br />
                                          <br />
                                          <br />

                                          <Image
                                            src="/images/COBW3594-R1-05-6.jpeg"
                                            alt="atlas2"
                                            width={960}
                                            height={636}
                                            layout='intrinsic'
                                            quality={100}
                                                />
                    <p className="h3">
                            別處 ↧
                          </p>

                          <Image
                            src="/images/COBW3593-R1-19-20.JPG"
                            alt="bcn1"
                            width={960}
                            height={636}
                            layout='intrinsic'
                            quality={100}
                                />

                          <Image
                            src="/images/COBW3593-R1-28-29.jpeg"
                            alt="bcn2"
                            width={480}
                            height={720}
                            layout='intrinsic'
                            quality={100}
                                />
</main>

  <footer>
  <Link href="/">
  <a>&#127962;</a>
  </Link>
  </footer>







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
    min-height: 6vh;
    padding-top: 0rem;
    padding-bottom: 1rem;
    display: intrinsic;
    flex-direction: row;
  }

  main {
    padding: 2 rem;
    padding-bottom: 2 rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  footer {
    width: 100%;
    height: 100px;
    border-top: 0px solid #ffc2f7;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: top;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  footer img {
    margin-left: 0rem;
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
    align-items: left;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 0.5rem;
  }

  .card {
    margin: 0rem;
    flex-basis: 45%;
    padding: 0rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 0px solid #333333;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #ffc2f7;
    border-color: #ffc2f7;
  }

  .card h2 {
    margin: 0 0 0rem 0;
    font-size: 0.90rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .card p {
    margin: 0;
    font-size: 1.0rem;
    line-height: 1.5;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

  }

  * {
    box-sizing: border-box;
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
    font-size: 0.925rem;
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
