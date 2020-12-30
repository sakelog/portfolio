import { Link, Element } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';

import AboutMe from './_aboutme';
import Qualification from './_qualification';
import Career from './_career';
import Skill from './_skill';

import { searchComponentBySlug } from '../../lib/searchComponentBySlug';

import styles from './profile.module.scss';

const ABOUT_ME = 'aboutme';
const QUALIFICATION = 'qualification';
const CAREER = 'career';
const SKILL = 'skill';

const Profile: profile.container.func = (props) => {
  const AboutMeComponentJson: Myjson = searchComponentBySlug(
    props.json,
    ABOUT_ME
  );

  const QualificationComponentJson: Myjson = searchComponentBySlug(
    props.json,
    QUALIFICATION
  );

  const CareerComponentJson: Myjson = searchComponentBySlug(props.json, CAREER);

  const SkillComponentJson: Myjson = searchComponentBySlug(props.json, SKILL);

  return (
    <Element name="profile">
      <article className={styles.root}>
        <h2>自己紹介</h2>
        <AboutMe json={AboutMeComponentJson} />
        <Career json={CareerComponentJson} />
        <Skill json={SkillComponentJson} />
        <Qualification json={QualificationComponentJson} />
        <span className="c__scrollButton">
          <span className="c__scrollButton--toDown">
            <Link
              activeClass="active"
              to="works"
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

export default Profile;
