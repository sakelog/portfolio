import { getAllProfileComponentsMD } from '../lib/getProfileComponentMD';
import { getAllProfileComponentsJson } from '../lib/getProfileComponentJson';
import Profile from '../component/profile/profile';

const TopPage = ({ profileComponentsMD, profileComponentsJson }) => {
  return (
    <div>
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
