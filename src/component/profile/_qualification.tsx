import ReactMarkdown from 'react-markdown';

import baseStyles from './profile.module.scss';

const Qualification: profile.component.func = (props) => {
  const mdContent = props.md.content;
  const mdInput: string = mdContent && mdContent;

  return (
    <section>
      <h2 className={baseStyles.sectionTitle}>保有資格</h2>
      <ReactMarkdown source={mdInput} />
    </section>
  );
};

export default Qualification;
