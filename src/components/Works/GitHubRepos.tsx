import { getFormattedDateYMD } from 'lib/util/getFormatDate';

import ExternalLink from 'components/ExternalLink';

const GitHubRepos = ({
  githubRepos,
}: {
  githubRepos: Works.GitHub.Repositories;
}) => (
  <section>
    <h3 className="c-heading__sub-section">
      GitHubレポジトリ
    </h3>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
      {githubRepos.nodes.map((repo) => (
        <section
          key={repo.id}
          className="border-2 border-gray rounded-md p-4 
              overflow-hidden"
        >
          <div className="border-b border-gray py-2">
            <ExternalLink href={repo.url} className="mb-4">
              <h4 className="text-2xl truncate">
                {repo.name}
              </h4>
            </ExternalLink>
            <p className="px-2">{repo.description}</p>
          </div>
          <div className="my-2">
            {repo.updatedAt ? (
              <p>{getFormattedDateYMD(repo.updatedAt)}</p>
            ) : (
              <p>{getFormattedDateYMD(repo.createdAt)}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {repo.languages.edges.map((language) => (
              <div
                className="flex items-center space-x-1"
                key={language.node.id}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: language.node.color,
                  }}
                />
                <span className="">
                  {language.node.name}
                </span>
              </div>
            ))}
          </div>
          {repo.latestRelease && (
            <div>
              <ExternalLink href={repo.latestRelease.url}>
                {repo.latestRelease.tagName}
              </ExternalLink>
            </div>
          )}
        </section>
      ))}
    </section>
  </section>
);

export default GitHubRepos;
