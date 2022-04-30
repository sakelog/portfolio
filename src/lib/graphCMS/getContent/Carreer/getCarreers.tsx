import { graphCMSClient } from 'lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getCarreers = async () => {
  const { carreers }: { carreers: Profile.Carreer.Items } =
    await graphCMSClient.request(gql`
      query Query_Carreers {
        carreers(orderBy: startYmd_ASC) {
          id
          title
          startYmd
          endYmd
          detail
        }
      }
    `);

  return carreers;
};

export default getCarreers;
