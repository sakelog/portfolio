import { graphCMSClient } from 'lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getAboutMeItems = async () => {
  const { aboutMes }: { aboutMes: Profile.AboutMe.Items } =
    await graphCMSClient.request(gql`
      query Query_AboutMes {
        aboutMes {
          id
          title
          detail
        }
      }
    `);

  return aboutMes;
};

export default getAboutMeItems;
