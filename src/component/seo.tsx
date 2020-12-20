import Head from 'next/head';
import siteMeta from '../config';

function SEO({ title, description }) {
  const setTitle = title == null ? siteMeta.title : title;
  const setDescription =
    description == null ? siteMeta.description : description;

  return (
    <Head>
      <title>{setTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default SEO;
