import type { AppProps } from 'next/app';
import GTMScript from '@components/GTM/script';

import '@styles/global.scss';

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <GTMScript />
      <Component {...pageProps} />
    </>
  );
}
