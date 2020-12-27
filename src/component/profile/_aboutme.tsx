import ReactMarkdown from 'react-markdown';

const AboutMe = ({ data, content }) => {
  const input = content;
  return (
    <section>
      <h2>Who is sake?</h2>
      <ReactMarkdown source={input} />
    </section>
  );
};

export default AboutMe;
