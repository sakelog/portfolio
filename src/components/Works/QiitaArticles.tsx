// lib
import { getFormattedDateYMD } from 'lib/util/getFormatDate';

// components
import ExteranalLink from 'components/ExternalLink';

const QiitaArticles = ({
  qiitaArticles,
}: {
  qiitaArticles: Works.Qiita.Article[];
}) => (
  <div>
    <h3 className="c-heading__sub-section">
      Qiita投稿記事
    </h3>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
      {qiitaArticles.map((article) => (
        <section
          key={article.id}
          className="border-2 border-gray rounded-md p-4 overflow-hidden"
        >
          <div className="border-b border-gray py-2">
            <ExteranalLink href={article.url}>
              <h4 className="text-xl">{article.title}</h4>
            </ExteranalLink>
          </div>
          <div className="py-2">
            <p>{getFormattedDateYMD(article.updated_at)}</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {article.tags.map((tag) => (
                <li
                  key={tag.id}
                  className="c-badge c-badge--gray"
                >
                  {tag.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </section>
  </div>
);

export default QiitaArticles;
