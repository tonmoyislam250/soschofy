import Head from "next/head";
import "@/styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TraceIt</title>
        <link rel="icon" href="/assets/icon/Findyfy-Icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
