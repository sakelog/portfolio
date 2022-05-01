import GitHubRepos from 'components/Works/GitHubRepos';

type PropTypes = {
  githubRepos: Works.GitHub.Repositories;
};

const Works = ({ githubRepos }: PropTypes) => (
  <GitHubRepos githubRepos={githubRepos} />
);

export default Works;
