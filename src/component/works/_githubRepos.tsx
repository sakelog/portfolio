import { format } from 'date-fns';
import { FiCalendar, FiRefreshCw } from 'react-icons/fi';

import styles from './Work.module.scss';

const GithubRepos: works.component_github.func = (props) => {
  const githubRepos = props.github;

  const githubReposSort = githubRepos.sort(function (a, b) {
    const item =
      a.updated_at < b.updated_at ? 1 : a.updated_at > b.updated_at ? -1 : 0;
    return item;
  });

  const githubWork_list = githubReposSort.map((repo) => {
    const created_at = format(new Date(repo.created_at), 'yyyy/MM/dd');
    const updated_at = repo.updated_at
      ? format(new Date(repo.updated_at), 'yyyy/MM/dd')
      : null;
    return (
      <li key={repo.name}>
        <p className={styles.create_date}>
          <span>
            <FiCalendar />
            {created_at}
          </span>
          <span>
            <FiRefreshCw />
            {updated_at}
          </span>
        </p>
        <a href={repo.html_url}>{repo.name}</a>
        <span className={styles.description}>{repo.description}</span>
        <span className={styles.otherInfo}>
          使用言語：<span className={styles.tag}>{repo.language}</span>
        </span>
      </li>
    );
  });
  const githubWorks = githubWork_list ? (
    <ul className={styles.Work_list}>{githubWork_list}</ul>
  ) : null;

  const fetchDate = format(new Date(props.date), 'yyyy/MM/dd');
  const fetchDate_format = (
    <span>
      <time>{fetchDate}</time>時点の情報です
    </span>
  );

  return (
    <section className={styles.componentRoot}>
      <h3>Github repo</h3>
      {fetchDate_format}
      {githubWorks}
    </section>
  );
};

export default GithubRepos;
