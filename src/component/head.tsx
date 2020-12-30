import Head from 'next/head';
import SiteMeta from '../config';

const CustomHead = () => {
  return (
    <Head>
      <title>{SiteMeta.title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="description" content={SiteMeta.description} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
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
    </Head>
  );
};

export default CustomHead;
