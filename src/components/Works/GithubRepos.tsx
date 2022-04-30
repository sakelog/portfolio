import { getFormattedDateYMD } from 'lib/util/getFormatDate';
import {
  HiOutlineCalendar,
  HiOutlineRefresh,
} from 'react-icons/hi';

type PropTypes = {
  githubRepos: Works.GitHub.Repositories;
};

const GithubRepos = ({ githubRepos }: PropTypes) => (
  <section>
    <h3 className="u__header--subTitle">Github Repos</h3>
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {githubRepos.nodes.map((repo) => (
        <li
          key={repo.id}
          className="border-2 border-theme rounded p-4"
        >
          <p className="flex flex-wrap">
            <span className="mr-2 mb-1 text-sm text-gray-600 flex items-center">
              <HiOutlineCalendar />
              {getFormattedDateYMD(repo.createdAt)}
            </span>
            {repo.updatedAt && (
              <span className="mb-1 text-sm text-gray-600 flex items-center">
                <HiOutlineRefresh />
                {getFormattedDateYMD(repo.updatedAt)}
              </span>
            )}
          </p>
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="my-2 font-medium"
          >
            {repo.name}
          </a>
          <p className="text-sm text-gray-600 my-2">
            {repo.description}
          </p>
          <p className="mt-4">
            <span className="text-gray-600 mr-2 text-xs">
              使用言語
            </span>
            <span
              className="text-white text-sm px-2 py-1"
              style={{
                backgroundColor: repo.primaryLanguage.color,
              }}
            >
              {repo.primaryLanguage.name}
            </span>
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export default GithubRepos;