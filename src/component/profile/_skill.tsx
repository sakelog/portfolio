import baseStyles from './profile.module.scss';

const Skill: profile.component.func = (props) => {
  const STAR = '★★★★★';
  const STAR_1 = <span>{STAR}</span>;
  const STAR_2 = <span>{STAR}</span>;
  const STAR_3 = <span>{STAR}</span>;
  const STAR_4 = <span>{STAR}</span>;
  const STAR_5 = <span>{STAR}</span>;

  const jsonContent: profile.skill_jsonContent = props.json.content;

  const skill_lists = jsonContent.skill_lists.map((skill_list) => {
    const categoryTitle = <h3>{skill_list.category}</h3>;
    const skillTag = skill_list.skills.map((skill) => {
      const starTag =
        skill.star == 1
          ? STAR_1
          : 2
          ? STAR_2
          : 3
          ? STAR_3
          : 4
          ? STAR_4
          : 5
          ? STAR_5
          : '';

      return (
        <li key={skill.skill}>
          <span>{skill.skill}</span>
          {starTag}
        </li>
      );
    });
    return (
      <section key={skill_list.category}>
        {categoryTitle}
        <ul>{skillTag}</ul>
      </section>
    );
  });
  return (
    <section>
      <h2 className={baseStyles.sectionTitle}>スキル</h2>
      {skill_lists}
    </section>
  );
};

export default Skill;
