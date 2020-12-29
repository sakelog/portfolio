import { getAllProfileComponentsMD } from '../lib/getProfileComponentMD';
import { getAllProfileComponentsJson } from '../lib/getProfileComponentJson';
import Header from '../component/header';
import Profile from '../component/profile/profile';
import ContactForm from '../component/contactform/contactform';

const TopPage = ({ profileComponentsMD, profileComponentsJson }) => {
  return (
    <div>
      <Header />
      <Profile md={profileComponentsMD} json={profileComponentsJson} />
      <ContactForm />
    </div>
  );
};

export async function getStaticProps() {
  const profileComponentsMD = getAllProfileComponentsMD();
  const profileComponentsJson = getAllProfileComponentsJson();

  return {
    props: {
      profileComponentsMD,
      profileComponentsJson,
    },
  };
}

export default TopPage;
