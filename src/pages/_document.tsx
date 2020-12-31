import Document, { Html, Head, Main, NextScript } from 'next/document';
import TagManager from 'react-gtm-module';
class MyDocument extends Document {
  componentDidMount() {
    TagManager.initialize({ gtmId: process.env.GTM_ID });
  }
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
