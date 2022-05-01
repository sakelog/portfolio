import { graphql } from '@octokit/graphql';

export const githubAPIClient = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

export default githubAPIClient;
