import ReactMarkdown from 'react-markdown';

import baseStyles from './profile.module.scss';

const AboutMe: profile.component.func = (props) => {
  const mdContent = props.md.content;
  const mdInput = mdContent && mdContent;
  return (
    <section>
      <h2 className={baseStyles.sectionTitle}>Who is sake?</h2>
      <ReactMarkdown source={mdInput} />
    </section>
  );
};

export default AboutMe;
