import { searchComponentBySlug } from '../../lib/searchComponentBySlug';

import Live from './_live';
import GithubRepos from './_githubRepos';

import styles from './Work.module.scss';

const WORKS_LIVE = 'workslive';

const Works: works.container.func = (props) => {
  const worksliveJson: Myjson = searchComponentBySlug(props.works, WORKS_LIVE);
  return (
    <article className={styles.root}>
      <h2 id="works">製作物</h2>
      <Live works={worksliveJson} />
      <GithubRepos github={props.github} date={props.date} />
    </article>
  );
};

export default Works;
