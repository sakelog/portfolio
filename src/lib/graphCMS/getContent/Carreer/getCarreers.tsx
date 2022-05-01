import { graphCMSClient } from 'lib/graphCMS/client';
import { gql } from 'graphql-request';

import { markdownToHtml } from 'lib/util/markdownToHtml';

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

  const resCarreers = carreers.map((carreer) => {
    const detailHtml = carreer.detail
      ? markdownToHtml(carreer.detail)
      : null;
    return {
      id: carreer.id,
      title: carreer.title,
      startYmd: carreer.startYmd,
      endYmd: carreer.endYmd,
      detail: detailHtml,
    };
  });

  return resCarreers;
};

export default getCarreers;
