import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => (
  <Html>
    <Head>
      <meta name="theme-color" content="#ffffff" />

      {/* Typeface */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" />

      {/* Icons */}
      <link rel="icon" href="/icons/favicon.svg" />
      <link rel="mask-icon" href="/icons/mask-icon.svg" color="#527fb8" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

      <link rel="manifest" href="/manifest.json" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
