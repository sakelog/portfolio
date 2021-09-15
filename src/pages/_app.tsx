import type { AppProps } from 'next/app';
import Script from 'next/script';

import '@styles/global.scss';

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GTM_ID}`}
      />
      <Component {...pageProps} />
    </>
  );
}
