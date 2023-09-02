import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meet Now - find meetups near you right now</title>
        <meta
          name="description"
          content="Find fascinating meetups in your city and invite other people"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
