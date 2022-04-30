import AboutMe from 'components/Profile/AboutMe';
import Carreer from 'components/Profile/Carreer';
import Qualification from 'components/Profile/Qualification';

const Profile = (props: {
  aboutMeItems: Profile.AboutMe.Items;
  carreerItems: Profile.Carreer.Items;
  qualifications: Profile.Qualification.Items;
}) => {
  const { aboutMeItems, carreerItems, qualifications } =
    props;
  return (
    <div>
      <h2 className="c-heading__main-section" id="profile">
        プロフィール
      </h2>
      <section
        className="p-2 my-4 border-2 border-gray 
      divide-y-2 divide-gray divide-dashed"
      >
        <AboutMe aboutMeItems={aboutMeItems} />
        <Carreer carreerItems={carreerItems} />
        <Qualification qualifications={qualifications} />
      </section>
    </div>
  );
};

export default Profile;
