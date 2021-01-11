import "../styles/globals.css";
import "../styles/BlogStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My Next.js Static Blog</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Heebo:wght@300;700&display=swap'
          rel='stylesheet'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='text' content='' />
        <meta name='author' content='' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <title>Beehired</title>
        <script
          src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
          integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
          crossorigin='anonymous'
        ></script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
          integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
          crossorigin='anonymous'
        ></script>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.9/css/uikit.min.css'
          integrity='sha512-/5ul+B2Sj/bezw4WjOtrR7rFC5esoeOL/cmjenCQZWI+lmE/4IWbtN4FMUnz1aeaYHNVMX7Nw4yzmYsZVsDpzg=='
          crossorigin='anonymous'
        />
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
          integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
          crossorigin='anonymous'
        ></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
