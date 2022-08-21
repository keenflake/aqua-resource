import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

import '@app/styles/index.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
