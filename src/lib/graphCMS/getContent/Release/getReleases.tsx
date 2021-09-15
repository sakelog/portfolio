import { GraphCMSClient } from '@lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getReleases = async () => {
  const { releases }: { releases: Works.Release.Items } =
    await GraphCMSClient.request(gql`
      query Query_Releases {
        releases(orderBy: updatedAt_DESC) {
          id
          title
          url
          screenshot {
            url
          }
          description
        }
      }
    `);

  return releases;
};
