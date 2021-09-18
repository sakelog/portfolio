import { getFormattedDateYYYYJa } from '@lib/util/getFormatDate';

type PropsType = {
  carreerItems: Profile.Career.Items;
};

const Carrer = (props: PropsType) => {
  return (
    <section>
      <h3 className="u__header--subTitle">経歴</h3>
      <ul>
        {props.carreerItems?.map((career) => (
          <li
            key={career.id}
            className="py-2 md:grid md:grid-cols-4 md:gap-2 md:py-0"
          >
            <p className="text-sm text-gray-600 md:text-right md:pr-4">
              <span>
                {getFormattedDateYYYYJa(career.startYmd)}
              </span>
              {career.endYmd && (
                <span>
                  ～{getFormattedDateYYYYJa(career.endYmd)}
                </span>
              )}
            </p>
            <section
              className="md:col-span-3 md:border-l md:border-dashed md:border-gray-400
                           md:pl-4 md:pb-2 md:relative"
            >
              <h4 className="font-bold">{career.title}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: career.detail,
                }}
                className="whitespace-pre-line py-2 px-4 text-sm md:py-0"
              />
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
        )) || null}
      </ul>
    </section>
  );
};

export default Carrer;
