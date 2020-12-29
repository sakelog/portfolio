import ReactMarkdown from 'react-markdown';

const Carrer: profile.component.func = (props) => {
  const mdContent = props.md.content;
  const mdInput: string = mdContent && mdContent;
  return (
    <section>
      <h2>経歴</h2>
      <ReactMarkdown source={mdInput} />
    </section>
  );
};

export default Carrer;
