//import styles from './_career.module.scss';
import styles from '@styles/Object/Project/_p__career.module.scss';

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
              <span>{career.startYmd}</span>
              {career.endYmd && (
                <span>～{career.endYmd}</span>
              )}
            </p>
            <section className={styles.mainSection}>
              <h4 className="font-bold">{career.title}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: career.detail,
                }}
                className="whitespace-pre-line py-2 px-4 text-sm md:py-0"
              />
            </section>
          </li>
        )) || null}
      </ul>
    </section>
  );
};

export default Carrer;
