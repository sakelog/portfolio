import { MdStar } from 'react-icons/md';

import styles from './_skill.module.scss';

const Skill: profile.component.func = (props) => {
  const STAR = (
    <>
      <span>
        <MdStar />
      </span>
      <span>
        <MdStar />
      </span>
      <span>
        <MdStar />
      </span>
      <span>
        <MdStar />
      </span>
      <span>
        <MdStar />
      </span>
    </>
  );
  const STAR_1 = (
    <span className={styles.star + ' ' + styles.star_1}>{STAR}</span>
  );
  const STAR_2 = (
    <span className={styles.star + ' ' + styles.star_2}>{STAR}</span>
  );
  const STAR_3 = (
    <span className={styles.star + ' ' + styles.star_3}>{STAR}</span>
  );
  const STAR_4 = (
    <span className={styles.star + ' ' + styles.star_4}>{STAR}</span>
  );
  const STAR_5 = (
    <span className={styles.star + ' ' + styles.star_5}>{STAR}</span>
  );

  const jsonContent: profile.skill_jsonContent = props.json.content;

  const skill_lists = jsonContent.skill_lists.map((skill_list) => {
    const categoryTitle = (
      <h4 className={styles.category}>{skill_list.category}</h4>
    );
    const skillTag = skill_list.skills.map((skill) => {
      const starTag =
        skill.star == 1
          ? STAR_1
          : skill.star == 2
          ? STAR_2
          : skill.star == 3
          ? STAR_3
          : skill.star == 4
          ? STAR_4
          : skill.star == 5
          ? STAR_5
          : '';

      return (
        <li key={skill.skill}>
          <span className={styles.skill}>{skill.skill}</span>
          {starTag}
        </li>
      );
    });
    return (
      <section key={skill_list.category} className={styles.skill_item}>
        <ul>
          {categoryTitle}
          {skillTag}
        </ul>
      </section>
    );
  });
  return (
    <section>
      <h3>スキル</h3>
      <section className={styles.skill_items}>{skill_lists}</section>
    </section>
  );
};

export default Skill;
