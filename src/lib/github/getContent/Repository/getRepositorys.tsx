import { GithubAPIClient } from '@lib/github/client';

export const getRepositorys = async () => {
  const { user }: { user: Works.GitHub.User } =
    await GithubAPIClient(
      `
      query Query_Repositories{
        user(login: "sakelog") {
          repositories(last: 20, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              id
              name
              description
              url
              createdAt
              updatedAt
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    `
    );

  const { repositories } = user;

  return repositories;
};
