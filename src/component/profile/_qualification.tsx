import Image from 'next/image';

import baseStyles from './profile.module.scss';
import styles from './_qualification.module.scss';

const Qualification: profile.component.func = (props) => {
  //const mdContent = props.md.content;
  //const mdInput: string = mdContent && mdContent;
  const jsonContent: profile.qualification_jsonContent = props.json.content;
  const qualification_list = jsonContent.qualifications.map((qualification) => {
    return (
      <li key={qualification.qualification}>{qualification.qualification}</li>
    );
  });
  const badge_list = jsonContent.badges.map((badge) => {
    return (
      <li key={badge.src}>
        <Image
          src={badge.src}
          alt={badge.alt}
          width={badge.width}
          height={badge.height}
          layout="intrinsic"
          loading="lazy"
        />
      </li>
    );
  });

  return (
    <section>
      <h3 className={baseStyles.sectionTitle}>保有資格</h3>
      <ul className={styles.qualification_list}>{qualification_list}</ul>
      <ul className={styles.badge_list}>{badge_list}</ul>
    </section>
  );
};

export default Qualification;
