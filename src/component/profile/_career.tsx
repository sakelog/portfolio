import styles from './_career.module.scss';

const Carrer: profile.component.func = (props) => {
  const jsonContent: profile.career_jsonContent = props.json.content;

  const career_list = jsonContent.career_list.map((career) => {
    const detail = career.detail.replace(/\\n/g, '\n');
    return (
      <li key={career.title} className={styles.item}>
        <p className={styles.ymd}>{career.ymd}</p>
        <section>
          <h4 className={styles.title}>{career.title}</h4>
          <p className={styles.detail}>{detail}</p>
        </section>
      </li>
    );
  });
  return (
    <section>
      <h3>経歴</h3>
      <ul>{career_list}</ul>
    </section>
  );
};

export default Carrer;
