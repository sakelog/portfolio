import ReactMarkdown from 'react-markdown';

const AboutMe: profile.component.func = (props) => {
  const mdContent = props.md.content;
  const mdInput = mdContent && mdContent;
  return (
    <section>
      <h2>Who is sake?</h2>
      <ReactMarkdown source={mdInput} />
    </section>
  );
};

export default AboutMe;
