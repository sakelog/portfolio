import Image from 'next/image';

import SiteMeta from '../../config';
import styles from './_socialLink.module.scss';

const SocialLink = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileImage}>
        <Image
          src="/img/profile.png"
          alt="sake プロフィール画像"
          width={200}
          height={200}
          layout="intrinsic"
          loading="lazy"
        />
      </div>
      <p>sake</p>
      <ul className={styles.socialLink}>
        <li>
          Twitter:
          <a
            href={'https://twitter.com/' + SiteMeta.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'@' + SiteMeta.social.twitter}
          </a>
        </li>
        <li>
          Github:
          <a
            href={'https://github.com/' + SiteMeta.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SiteMeta.social.github}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
