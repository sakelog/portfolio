export const getArticles = async () => {
  const articles = await fetch(
    'https://qiita.com//api/v2/authenticated_user/items?page=1&per_page=20',
    {
      headers: {
        authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
      },
    }
  );

  const articlesObj: Works.Qiita.Article[] =
    await articles.json();

  return articlesObj;
};

export default getArticles;
