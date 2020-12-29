import baseStyles from './profile.module.scss';
import styles from './_career.module.scss';

const Carrer: profile.component.func = (props) => {
  const jsonContent: profile.career_jsonContent = props.json.content;

  const career_list = jsonContent.career_list.map((career) => {
    return (
      <li key={career.title} className={styles.item}>
        <p className={styles.ymd}>{career.ymd}</p>
        <section>
          <h3 className={styles.title}>{career.title}</h3>
          <p>{career.detail}</p>
        </section>
      </li>
    );
  });
  return (
    <section>
      <h2 className={baseStyles.sectionTitle}>経歴</h2>
      <ul>{career_list}</ul>
    </section>
  );
};

export default Carrer;
