import { getFormattedDateYMD } from 'lib/util/getFormatDate';

// lib
import { calcPercentage, calcByte } from 'lib/util/calc';

// components
import ExternalLink from 'components/ExternalLink';
import {
  Card,
  CardHeader,
  CardBody,
} from 'components/Card';

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
        <Card key={repo.id}>
          <CardHeader>
            <ExternalLink href={repo.url} className="mb-4">
              <h4 className="text-2xl truncate">
                {repo.name}
              </h4>
            </ExternalLink>
            <p className="px-2">{repo.description}</p>
            {repo.latestRelease && (
              <div>
                <ExternalLink href={repo.latestRelease.url}>
                  {repo.latestRelease.tagName}
                </ExternalLink>
              </div>
            )}
          </CardHeader>
          <CardBody>
            <div className="my-2">
              {repo.updatedAt ? (
                <p>{getFormattedDateYMD(repo.updatedAt)}</p>
              ) : (
                <p>{getFormattedDateYMD(repo.createdAt)}</p>
              )}
            </div>
            <div className="my-2 flex flex-wrap items-center gap-2">
              <div className="c-badge c-badge--gray">
                {calcByte(repo.languages.totalSize)}
              </div>
            </div>
            <div className="my-2 flex flex-wrap gap-2">
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
                  <span>{language.node.name}</span>
                  <span className="text-sm text-gray-dark">
                    {calcPercentage(
                      language.size,
                      repo.languages.totalSize
                    )}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </section>
  </section>
);

export default GitHubRepos;
