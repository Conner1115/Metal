import '../styles/globals.css';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (<>
    <NextNProgress color="var(--f-6)"
    startPosition={0.3}
    stopDelayMs={200}
    height={3}
    showOnShallow={true}/>
    <Head>
      <title>AllMetalWelding</title>
      <link rel="icon" href="/logo.svg" type="image/svg"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Phillip Davis is a freelance metalworker that specializes in building exterior stair railings, and more.  You've got the right man for metalworking."/>

      <meta property="og:type" content="website" />
      <meta property="og:title" content="All Metal Welding"/>
      <meta property="og:description"
        content="Phillip Davis is a freelance metalworker that specializes in building exterior stair railings, and more.  You've got the right man for metalworking."/>
      <meta property="og:url" content="https://allmetalwelding.com"/>
      <meta property="og:image" content="/home.png"/>
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="580" />
      <meta name="copyright" content="2021"/>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
