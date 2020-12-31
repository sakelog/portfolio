import Document, { Html, Head, Main, NextScript } from 'next/document';

const GTM_ID = process.env.GTM_ID;
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/*--- Google Tag Manager */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/*--- Google Tag Manager */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
