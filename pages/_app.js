import "../styles/globals.css";
import "../styles/BlogStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/uikit.min.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";

function MyApp({ Component, pageProps }) {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.8/js/uikit.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  library.add(fab);
  return (
    <div lang={"en"}>
      <Head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-YV7927BXMQ'
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YV7927BXMQ');;
        `,
          }}
        />
        <script></script>
      </Head>
      <Navbar />
      <LoadingOverlay
        active={loading}
        spinner
        text='Bee Right With You...'
        className='sweet-loader'
      >
        <Component {...pageProps} />
      </LoadingOverlay>{" "}
      <Footer />
    </div>
  );
}

export default MyApp;
