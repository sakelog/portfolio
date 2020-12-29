import { getAllProfileComponentsMD } from '../lib/getProfileComponentMD';
import { getAllProfileComponentsJson } from '../lib/getProfileComponentJson';
import Profile from '../component/profile/profile';
import Header from '../component/header';

const TopPage = ({ profileComponentsMD, profileComponentsJson }) => {
  return (
    <div>
      <Header />
      <Profile md={profileComponentsMD} json={profileComponentsJson} />
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
