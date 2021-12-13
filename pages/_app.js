import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>AllMetalWelding</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/logo.svg" type="image/svg"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
