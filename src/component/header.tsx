import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <title>porfolio</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta
        name="description"
        content="システムエンジニアsakeのポートフォリオ"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href={
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
        }
      />
    </Head>
  );
};

export default Header;
