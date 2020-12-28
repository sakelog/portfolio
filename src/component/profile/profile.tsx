import AboutMe from './_aboutme';
import Qualification from './_qualification';
import Career from './_career';
import Skill from './_skill';

import { searchComponentBySlug } from '../../lib/searchComponentBySlug';

type ComponentsType = {
  MD: {
    slug: string;
    content: Buffer;
    data: any;
  };
  Json: {
    content: JSON;
  };
};

const ABOUT_ME = 'aboutme';
const QUALIFICATION = 'qualification';
const CAREER = 'career';
const SKILL = 'skill';

const Profile = ({ MD, Json }: ComponentsType) => {
  const AboutMeComponentMD = searchComponentBySlug(MD, ABOUT_ME);
  const AboutMeDataMD = AboutMeComponentMD && AboutMeComponentMD.data;
  const AboutMeContentMD = AboutMeComponentMD && AboutMeComponentMD.content;

  const QualificationComponentMD = searchComponentBySlug(MD, QUALIFICATION);
  const QualificationDataMD =
    QualificationComponentMD && QualificationComponentMD.data;
  const QualificationContent =
    QualificationComponentMD && QualificationComponentMD.content;

  const CareerComponentMD = searchComponentBySlug(MD, CAREER);
  const CareerDataMD = CareerComponentMD && CareerComponentMD.data;
  const CareerContentMD = CareerComponentMD && CareerComponentMD.content;

  const SkillComponentMD = searchComponentBySlug(MD, SKILL);
  const SkillDataMD = SkillComponentMD && SkillComponentMD.data;
  const SkillContentMD = SkillComponentMD && SkillComponentMD.content;

  const SkillComponentJson = searchComponentBySlug(Json, SKILL);
  const SkillContentJson = SkillComponentJson && SkillComponentJson.content;

  return (
    <article>
      <AboutMe data={AboutMeDataMD} content={AboutMeContentMD} />
      <Qualification
        data={QualificationDataMD}
        content={QualificationContent}
      />
      <Career data={CareerDataMD} content={CareerContentMD} />
      <Skill mdData={null} mdContent={null} jsonContent={SkillContentJson} />
    </article>
  );
};

export default Profile;
