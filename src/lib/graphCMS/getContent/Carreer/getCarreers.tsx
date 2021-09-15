import { GraphCMSClient } from '@lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getCarreers = async () => {
  const { careers }: { careers: Profile.Career.Items } =
    await GraphCMSClient.request(gql`
      query Query_Careers {
        careers(orderBy: startYmd_ASC) {
          id
          title
          startYmd
          endYmd
          detail
        }
      }
    `);

  return careers;
};
