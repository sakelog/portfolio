import { Link, Element } from 'react-scroll';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { searchComponentBySlug } from '../../lib/searchComponentBySlug';

import Live from './_live';
import GithubRepos from './_githubRepos';

import styles from './Work.module.scss';

const WORKS_LIVE = 'workslive';

const Works: works.container.func = (props) => {
  const worksliveJson: Myjson = searchComponentBySlug(props.works, WORKS_LIVE);
  return (
    <Element name="works">
      <article className={styles.root}>
        <h2>製作物</h2>
        <Live works={worksliveJson} />
        <GithubRepos github={props.github} date={props.date} />
        <span className="c__scrollButton">
          <span className="c__scrollButton--toUp">
            <Link
              activeClass="active"
              to="profile"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FiChevronUp />
            </Link>
          </span>
          <span className="c__scrollButton--toDown">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FiChevronDown />
            </Link>
          </span>
        </span>
      </article>
    </Element>
  );
};

export default Works;
