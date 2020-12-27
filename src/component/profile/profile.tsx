import AboutMe from './_aboutme';
import Qualification from './_qualification';
import Career from './_career';
import Skill from './_skill';

import { searchComponentBySlug } from '../../lib/searchComponentBySlug';

type ComponentsType = {
  Components: {
    slug: string;
    content: Buffer;
    data: any;
  };
};

const ABOUT_ME = 'aboutme';
const QUALIFICATION = 'qualification';
const CAREER = 'career';
const SKILL = 'skill';

const Profile = ({ Components }: ComponentsType) => {
  const AboutMeComponent = searchComponentBySlug(Components, ABOUT_ME);
  const AboutMeData = AboutMeComponent && AboutMeComponent.data;
  const AboutMeContent = AboutMeComponent && AboutMeComponent.content;

  const QualificationComponent = searchComponentBySlug(
    Components,
    QUALIFICATION
  );
  const QualificationData =
    QualificationComponent && QualificationComponent.data;
  const QualificationContent =
    QualificationComponent && QualificationComponent.content;

  const CareerComponent = searchComponentBySlug(Components, CAREER);
  const CareerData = CareerComponent && CareerComponent.data;
  const CareerContent = CareerComponent && CareerComponent.content;

  const SkillComponent = searchComponentBySlug(Components, SKILL);
  const SkillData = SkillComponent && SkillComponent.data;
  const SkillContent = SkillComponent && SkillComponent.content;

  return (
    <article>
      <AboutMe data={AboutMeData} content={AboutMeContent} />
      <Qualification data={QualificationData} content={QualificationContent} />
      <Career data={CareerData} content={CareerContent} />
      <Skill data={SkillData} content={SkillContent} />
    </article>
  );
};

export default Profile;
