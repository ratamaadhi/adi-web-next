import '../styles/global.css';
import Head from 'next/head';
import App from 'next/app';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import {
  // ApolloClient,
  // InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { getStrapiMedia } from '../lib/media';
import configureStore from '../redux/store';
import { GlobalContext } from '../context/globalContext';
import { GLOBAL } from '../lib/graphql/queries';
import client from '../lib/graphql/setup';

// const client = new ApolloClient({
//   uri:
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql` ||
//     "http://localhost:1337/graphql",
//   cache: new InMemoryCache(),
// });

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
            getStrapiMedia(global.favicon) || '../public/kucing_loading.jpg'
          }
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </ApolloProvider>
        </Provider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const { data } = await client.query({
    query: GLOBAL,
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: data.global } };
};

export default MyApp;
