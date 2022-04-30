/* eslint react/jsx-props-no-spreading: 0 */
import type { AppProps } from 'next/app';
import GTMScript from 'components/GTM/script';

import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GTMScript />
    <Component {...pageProps} />
  </>
);

export default MyApp;
