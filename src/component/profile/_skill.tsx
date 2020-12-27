import ReactMarkdown from 'react-markdown';

const Skill = ({ data, content }) => {
  const input = content;
  return (
    <section>
      <h2>スキル</h2>
      <ReactMarkdown source={input} />
    </section>
  );
};

export default Skill;
