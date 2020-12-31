import { getAllProfileComponentsMD } from '../lib/getProfileComponentMD';
import { getAllComponentsJson } from '../lib/getComponentJson';
import { setSiteMap } from '../lib/setStitemap';

import SiteMeta from '../config';

import Layout from '../component/layout';
import Profile from '../component/profile/profile';
import Works from '../component/works/works';

const PROFILE_DIRECTORY = 'profile';
const WORKS_DIRECTORY = 'works';

const TopPage = ({ profileComponents, worksComponents, fetchDate }) => {
  return (
    <Layout>
      <Profile md={profileComponents.md} json={profileComponents.json} />
      <Works
        github={worksComponents.github}
        works={worksComponents.works}
        date={fetchDate}
      />
    </Layout>
  );
};

export default TopPage;

export async function getStaticProps() {
  const profileComponentsMD = getAllProfileComponentsMD();
  const profileComponentsJson = getAllComponentsJson(PROFILE_DIRECTORY);

  const githubPath = 'https://api.github.com/users/' + SiteMeta.social.github;
  const githubRepos = await fetch(githubPath + '/repos');
  const githubReposJson: JSON = await githubRepos.json();

  const works = getAllComponentsJson(WORKS_DIRECTORY);

  const fetchDate = new Date();
  const fetchDate_string = fetchDate.toString();

  setSiteMap(fetchDate);

  return {
    props: {
      profileComponents: {
        md: profileComponentsMD,
        json: profileComponentsJson,
      },
      worksComponents: {
        works: works,
        github: githubReposJson,
      },
      fetchDate: fetchDate_string,
    },
  };
}
