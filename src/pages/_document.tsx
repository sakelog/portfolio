import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import GTMScript from '@components/GTM/script';
import GTMNoScript from '@components/GTM/noScript';

class MyDocument extends Document {
  render() {
    return (
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
            href={
              'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@400;500&display=swap'
            }
            rel="stylesheet"
          />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'
            }
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                `(function(w,l){` +
                `w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});` +
                `})(window,'dataLayer');`,
            }}
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
  }
}

export default MyDocument;
