import ReactMarkdown from 'react-markdown';

const Qualification: profile.component.func = (props) => {
  const mdContent = props.md.content;
  const mdInput: string = mdContent && mdContent;

  return (
    <section>
      <h2>保有資格</h2>
      <ReactMarkdown source={mdInput} />
    </section>
  );
};

export default Qualification;
