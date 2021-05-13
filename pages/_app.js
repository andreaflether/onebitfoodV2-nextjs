import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link ref="icon" href="favicon.ico" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
