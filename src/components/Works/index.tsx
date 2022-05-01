import GitHubRepos from 'components/Works/GitHubRepos';
import QiitaArticles from 'components/Works/QiitaArticles';

const Works = ({
  githubRepos,
  qiitaArticles,
}: {
  githubRepos: Works.GitHub.Repositories;
  qiitaArticles: Works.Qiita.Article[];
}) => (
  <div>
    <h2 className="c-heading__main-section" id="works">
      作成したもの
    </h2>
    <GitHubRepos githubRepos={githubRepos} />
    <QiitaArticles qiitaArticles={qiitaArticles} />
  </div>
);

export default Works;
