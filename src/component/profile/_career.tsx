import ReactMarkdown from 'react-markdown';

const Career = ({ data, content }) => {
  const input = content;
  return (
    <section>
      <h2>経歴</h2>
      <ReactMarkdown source={input} />
    </section>
  );
};

export default Career;
