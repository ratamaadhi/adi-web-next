import "../styles/global.css";
import Head from "next/head";
import App from "next/app";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import configureStore from "../redux/store";
import { Provider } from "react-redux";
import { GlobalContext } from "../context/globalContext";
import { AnimatePresence } from "framer-motion";

const store = configureStore();
function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          href={
            getStrapiMedia(global.favicon) || "../public/kucing_loading.jpg"
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Provider store={store}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Provider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
