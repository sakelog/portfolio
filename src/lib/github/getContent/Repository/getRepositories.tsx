import { githubAPIClient } from 'lib/github/client';

import siteMeta from 'components/config';

export const getRepositories = async () => {
  const { user }: { user: Works.GitHub.User } =
    await githubAPIClient(
      `
      query Query_Repositories($githubUser: String!) {
        user(login: $githubUser) {
          repositories(
            last: 20
            privacy: PUBLIC
            orderBy: {field: UPDATED_AT, direction: DESC}
          ) {
            nodes {
              id
              name
              description
              url
              createdAt
              updatedAt
              languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    name
                    id
                    color
                  }
                }
              }
              latestRelease {
                tagName
                url
              }
            }
          }
        }
      }
    `,
      { githubUser: siteMeta.social.github }
    );

  const { repositories } = user;

  return repositories;
};

export default getRepositories;
