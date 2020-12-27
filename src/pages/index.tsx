import { getAllProfileComponents } from '../lib/getProfileComponent';
import Profile from '../component/profile/profile';

const TopPage = ({ profileComponents }) => {
  return (
    <div>
      <Profile Components={profileComponents} />
    </div>
  );
};

export async function getStaticProps() {
  const profileComponents = getAllProfileComponents();

  return {
    props: {
      profileComponents,
    },
  };
}

export default TopPage;
