import "../styles/globals.css";
import "../styles/BlogStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/uikit.min.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { css } from "@emotion/core";
import LoadingOverlay from "react-loading-overlay";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffd900;
  left: 50%;
  top: 40%;
  position: absolute;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
`;

function MyApp({ Component, pageProps }) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.8/js/uikit.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  library.add(fab);
  return (
    <div className='sweet-loader'>
      <Navbar />
      <LoadingOverlay
        active={loading}
        spinner
        text='Bee Right With You...'
        className='sweet-loader'
      >
        <Component {...pageProps} />
      </LoadingOverlay>{" "}
    </div>
  );
}

export default MyApp;
