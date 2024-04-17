import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackstreet 2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logo_hack.png" type="image/x-icon" />
        <link rel="preconnect" href="https://stijndv.com" />
        <meta
          name="description"
          content="Whether you're a patient looking to access your medical records, a healthcare provider seeking to collaborate with patients, or a caregiver managing the health of a loved one, our website is here to help. We're committed to providing you with the highest level of service and support."
        />
        <meta
          name="keywords"
          content="Hackathon, Hackstreet, Hackstreet 2.0, Hackers"
        />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
