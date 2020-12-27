import ReactMarkdown from 'react-markdown';

const Qualification = ({ data, content }) => {
  const input = content;
  return (
    <section>
      <h2>保有資格</h2>
      <ReactMarkdown source={input} />
    </section>
  );
};

export default Qualification;
