import { getFormattedDateYYYYJa } from 'lib/util/getFormatDate';
import { markdownToHtml } from 'lib/util/markdownToHtml';

import style from 'styles/Object/Component/carreer.module.scss';

type PropsType = {
  carreerItems: Profile.Carreer.Items;
};

const Carrer = ({ carreerItems }: PropsType) => (
  <section>
    <h3 className="u__header--subTitle">経歴</h3>
    <ul>
      {carreerItems?.map((carreer) => {
        const detailHtml = carreer.detail
          ? markdownToHtml(carreer.detail)
          : null;
        return (
          <li
            key={carreer.id}
            className="py-2 md:grid md:grid-cols-4 md:gap-2 md:py-0"
          >
            <p className="text-sm text-gray-600 md:text-right md:pr-4">
              <span>
                {getFormattedDateYYYYJa(carreer.startYmd)}
              </span>
              {carreer.endYmd && (
                <span>
                  ～{getFormattedDateYYYYJa(carreer.endYmd)}
                </span>
              )}
            </p>
            <section
              className="md:col-span-3 md:border-l md:border-dashed md:border-gray-400
                           md:pl-4 md:pb-2 md:relative"
            >
              <h4 className="font-bold">{carreer.title}</h4>
              {detailHtml && (
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: detailHtml,
                  }}
                  className={style.detail}
                />
              )}
              <span
                className="hidden md:block 
                           bg-theme absolute rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  top: 6,
                  left: -5,
                }}
              />
            </section>
          </li>
        );
      }) || null}
    </ul>
  </section>
);

export default Carrer;
