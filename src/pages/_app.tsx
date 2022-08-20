import { AppProps } from 'next/app';
import { FC } from 'react';

import '@app/styles/index.css';

const App: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
