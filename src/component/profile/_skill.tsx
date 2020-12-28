import ReactMarkdown from 'react-markdown';

const Skill = ({ mdData, mdContent, jsonContent }) => {
  const STAR = '★★★★★';
  const STAR_1 = <span>{STAR}</span>;
  const STAR_2 = <span>{STAR}</span>;
  const STAR_3 = <span>{STAR}</span>;
  const STAR_4 = <span>{STAR}</span>;
  const STAR_5 = <span>{STAR}</span>;

  const input = mdContent && mdContent;
  const skill_Lists = jsonContent.skill_lists.map((skill_list) => {
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
      <div key={skill_list.category}>
        {categoryTitle}
        <ul>{skillTag}</ul>
      </div>
    );
  });
  return (
    <section>
      <h2>スキル</h2>
      {skill_Lists}
      <ReactMarkdown source={input} />
    </section>
  );
};

export default Skill;
