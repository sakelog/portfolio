import { graphql } from '@octokit/graphql';

export const GithubAPIClient = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});
