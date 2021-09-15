import { GraphCMSClient } from '@lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getQualifications = async () => {
  const {
    qualifications,
  }: { qualifications: Profile.Qualification.Items } =
    await GraphCMSClient.request(gql`
      query Query_Qualifications {
        qualifications(orderBy: yymm_ASC) {
          id
          name
          yymm
          badge {
            id
            title
            width
            height
            image {
              url
            }
          }
        }
      }
    `);

  return qualifications;
};
