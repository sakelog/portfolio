import StarIconCollection from 'components/Skill/StarIconCollection';
import Legend from 'components/Skill/Legend';

const SkillLists = ({
  skillLists,
}: {
  skillLists: Skill.Collections;
}) => (
  <>
    {skillLists.map((skillList) => (
      <section
        key={skillList.id}
        className="border-2 border-gray overflow-hidden p-4 rounded-md"
      >
        <h3 className="mb-4 py-2 border-b border-gray text-center">
          {skillList.category}
        </h3>
        <ul>
          {skillList.skills.map((skill) => (
            <li
              key={skill.id}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 
                items-center py-2"
            >
              <span className="font-bold">
                {skill.name}
              </span>
              <StarIconCollection
                keyphrase={skill.name}
                times={skill.star}
              />
            </li>
          ))}
        </ul>
      </section>
    ))}
  </>
);

const Skill = ({
  skillLists,
}: {
  skillLists: Skill.Collections;
}) => (
  <section className="overflow-hidden">
    <h2 className="c-heading__main-section" id="skill">
      スキル
    </h2>
    <section className="my-4 grid grid-cols-1 gap-y-4 overflow-hidden">
      <Legend />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <SkillLists skillLists={skillLists} />
      </div>
    </section>
  </section>
);
export default Skill;
