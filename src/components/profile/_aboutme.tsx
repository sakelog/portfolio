type PropsType = {
  aboutMeItems: Profile.AboutMe.Items;
};

const AboutMe = ({ aboutMeItems }: PropsType) => (
  <section>
    <h3 className="u__header--subTitle">Who is sake?</h3>
    <ul className="py-2 px-4 divide-y divide-dashed divide-gray-400">
      {aboutMeItems?.map((item) => (
        <li
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-4 my-4 px-2 py-4"
        >
          <span className="font-bold">{item.title}</span>
          <span className="md:col-span-3">
            {item.detail}
          </span>
        </li>
      )) || null}
    </ul>
  </section>
);

export default AboutMe;
