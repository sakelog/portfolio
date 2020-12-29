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
  const AboutMeComponentMD: profile.md = searchComponentBySlug(
    props.md,
    ABOUT_ME
  );

  const QualificationComponentJson: profile.json = searchComponentBySlug(
    props.json,
    QUALIFICATION
  );

  const CareerComponentJson: profile.json = searchComponentBySlug(
    props.json,
    CAREER
  );

  const SkillComponentJson: profile.json = searchComponentBySlug(
    props.json,
    SKILL
  );

  return (
    <article>
      <AboutMe md={AboutMeComponentMD} />
      <Qualification json={QualificationComponentJson} />
      <Career json={CareerComponentJson} />
      <Skill json={SkillComponentJson} />
    </article>
  );
};

export default Profile;
