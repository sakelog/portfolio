import { getAllProfileComponentsMD } from '../lib/getProfileComponentMD';
import { getAllProfileComponentsJson } from '../lib/getProfileComponentJson';

import Header from '../component/header';
import HeroHeader from '../component/heroheader/heroheader';
import Profile from '../component/profile/profile';
import ContactForm from '../component/contactform/contactform';

const TopPage = ({ profileComponentsMD, profileComponentsJson }) => {
  return (
    <div>
      <Header />
      <HeroHeader />
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
