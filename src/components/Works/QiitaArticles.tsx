// lib
import { getFormattedDateYMD } from 'lib/util/getFormatDate';

// components
import ExteranalLink from 'components/ExternalLink';
import {
  Card,
  CardHeader,
  CardBody,
} from 'components/Card';

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
        <Card key={`qiitaarticle-${article.id}`}>
          <CardHeader>
            <ExteranalLink href={article.url}>
              <h4 className="text-xl">{article.title}</h4>
            </ExteranalLink>
          </CardHeader>
          <CardBody>
            <p>{getFormattedDateYMD(article.updated_at)}</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {article.tags.map((tag) => (
                <li
                  key={`qiitaarticle-${article.id}-tag-${tag.name}`}
                  className="c-badge c-badge--gray text-sm"
                >
                  {tag.name}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
    </section>
  </div>
);

export default QiitaArticles;
