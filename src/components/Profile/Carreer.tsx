import { getFormattedDateYYYYJa } from 'lib/util/getFormatDate';

const Carrer = ({
  carreerItems,
}: {
  carreerItems: Profile.Carreer.Items;
}) => (
  <section className="p-4">
    <span className="c-badge c-badge--theme">経歴</span>
    <ul className="p-2">
      {carreerItems?.map((carreer) => (
        <li key={carreer.id} className="c-timeline__root">
          <p className="c-timeline__date">
            <span>
              {getFormattedDateYYYYJa(carreer.startYmd)}
            </span>
            {carreer.endYmd && (
              <span>
                ～{getFormattedDateYYYYJa(carreer.endYmd)}
              </span>
            )}
          </p>
          <section className="c-timeline__item">
            <h4 className="font-bold">{carreer.title}</h4>
            {carreer.detail && (
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: carreer.detail,
                }}
                className="p-carreer__detail"
              />
            )}
          </section>
        </li>
      ))}
    </ul>
  </section>
);

export default Carrer;
