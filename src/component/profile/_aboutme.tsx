import styles from './_aboutme.module.scss';

const AboutMe: profile.component.func = (props) => {
  const jsonContent: profile.aboutme_jsonContent = props.json.content;
  const aboutme_list = jsonContent.aboutme_list.map((item) => {
    return (
      <li key={item.title} className={styles.item}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.content}>{item.content}</span>
      </li>
    );
  });

  return (
    <section>
      <h3>Who is sake?</h3>
      <ul className={styles.aboutme_list}>{aboutme_list}</ul>
    </section>
  );
};

export default AboutMe;
