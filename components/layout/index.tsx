import Head from "next/head";
import Navbar from "../navbar";

const Layout = ({ children, title }: any) => {
  return (
    <>
      <Head>
        <title>{title} | Movix</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="theme-color" content="#496DDB" />
        <meta
          name="description"
          content="2FA Auth application for securing your 2FA enabled account."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
