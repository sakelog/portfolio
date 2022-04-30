import { graphCMSClient } from 'lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getSkillLists = async () => {
  const {
    skillLists,
  }: { skillLists: Profile.Skill.Collections } =
    await graphCMSClient.request(gql`
      query Query_SkillLists {
        skillLists(orderBy: orderId_ASC) {
          id
          category
          skills(orderBy: star_DESC) {
            id
            name
            star
          }
        }
      }
    `);

  return skillLists;
};

export default getSkillLists;
