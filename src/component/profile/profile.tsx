import AboutMe from './_aboutme';
import Qualification from './_qualification';
import Career from './_career';
import Skill from './_skill';

import { searchComponentBySlug } from '../../lib/searchComponentBySlug';

const ABOUT_ME = 'aboutme';
const QUALIFICATION = 'qualification';
const CAREER = 'career';
const SKILL = 'skill';

const Profile: profile.container.func = (props) => {
  const AboutMeComponentMD: profile.md = searchComponentBySlug(
    props.md,
    ABOUT_ME
  );

  const QualificationComponentMD: profile.md = searchComponentBySlug(
    props.md,
    QUALIFICATION
  );

  const CareerComponentMD: profile.md = searchComponentBySlug(props.md, CAREER);

  const SkillComponentJson: profile.json = searchComponentBySlug(
    props.json,
    SKILL
  );

  return (
    <article>
      <AboutMe md={AboutMeComponentMD} />
      <Qualification md={QualificationComponentMD} />
      <Career md={CareerComponentMD} />
      <Skill json={SkillComponentJson} />
    </article>
  );
};

export default Profile;
