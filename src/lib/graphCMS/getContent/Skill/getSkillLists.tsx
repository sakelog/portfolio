import { GraphCMSClient } from '@lib/graphCMS/client';
import { gql } from 'graphql-request';

export const getSkillLists = async () => {
  const {
    skillLists,
  }: { skillLists: Profile.Skill.Collections } =
    await GraphCMSClient.request(gql`
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
