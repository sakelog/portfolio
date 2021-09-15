import { HiStar as StarIcon } from 'react-icons/hi';

type PropsType = {
  skillLists: Profile.Skill.Collections;
};

const Skill = (props: PropsType) => {
  const skillLists =
    props.skillLists?.map((skillList) => {
      return (
        <section
          key={skillList.id}
          className="overflow-hidden border-2 border-theme rounded p-4"
        >
          <h4 className="mb-4">{skillList.category}</h4>
          <ul>
            {skillList.skills.map((skill) => {
              const MAX_STAR = 5;
              let yellowStar = Array(skill.star);
              for (
                let index = 0;
                index < yellowStar.length;
                index++
              ) {
                yellowStar[index] = (
                  <StarIcon
                    className="text-yellow-400"
                    key={index}
                  />
                );
              }
              let grayStar = Array(MAX_STAR - skill.star);
              for (
                let index = 0;
                index < grayStar.length;
                index++
              ) {
                grayStar[index] = (
                  <StarIcon
                    className="text-gray-400"
                    key={index}
                  />
                );
              }
              return (
                <li
                  key={skill.id}
                  className="grid grid-cols-3 gap-2 items-center py-2"
                >
                  <span className="font-bold">
                    {skill.name}
                  </span>
                  <span className="col-span-2 flex">
                    {yellowStar}
                    {grayStar}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }) || null;
  return (
    <section>
      <h3 className="u__header--subTitle">スキル</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillLists}
      </section>
    </section>
  );
};

export default Skill;
