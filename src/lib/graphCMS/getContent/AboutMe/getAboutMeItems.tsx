import { GraphCMSClient } from '@lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getAboutMeItems = async () => {
  const { aboutMes }: { aboutMes: Profile.AboutMe.Items } =
    await GraphCMSClient.request(gql`
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
