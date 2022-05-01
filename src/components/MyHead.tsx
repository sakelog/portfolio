import Head from 'next/head';

import siteMeta from 'components/config';

const MyHead = ({
  ogpImagePath,
}: {
  ogpImagePath: string;
}) => (
  <Head>
    <title>{siteMeta.title}</title>
    <meta
      name="description"
      content={siteMeta.description}
    />
    <meta property="og:title" content={siteMeta.title} />
    <meta
      property="og:description"
      content={siteMeta.description}
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={ogpImagePath} />
    <meta
      name="twitter:card"
      content="summary_large_image"
    />
    <meta
      name="twitter:description"
      content={siteMeta.description}
    />
    <meta name="theme-color" content="#3675a9" />
    <link
      rel="shortcut icon"
      type="image/vnd.microsoft.icon"
      href="/favicon.ico"
    />
    <link
      rel="icon"
      type="image/vnd.microsoft.icon"
      href="/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/img/icon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/img/icon/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/img/icon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/img/icon/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/img/icon/android-chrome-512x512.png"
    />
    <link rel="manifest" href="/manifest.json" />
  </Head>
);

export default MyHead;
