import Head from 'next/head';
import SiteMeta from '../config';

const CustomHead = () => {
  const ogImage = '/img/ogimage.png';
  return (
    <Head>
      <title>{SiteMeta.title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="description" content={SiteMeta.description} />
      <link
        rel="stylesheet"
        href={
          'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet'
        }
      />
      <link
        rel="stylesheet"
        href={
          'https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet'
        }
      />
      <meta property="og:title" content={SiteMeta.title} />
      <meta property="og:description" content={SiteMeta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={SiteMeta.description} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );
};

export default CustomHead;
