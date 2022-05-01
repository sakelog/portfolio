import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import GTMNoScript from 'components/GTM/noScript';

const MyDocument = () => (
  <Html lang="ja">
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      {process.env.NODE_ENV === 'production' && (
        <GTMNoScript />
      )}
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
