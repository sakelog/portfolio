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
      <p className={styles.author}>{SiteMeta.author}</p>
      <ul className={styles.socialLink}>
        <li>
          <a
            href={'https://twitter.com/' + SiteMeta.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter: {'@' + SiteMeta.social.twitter}
          </a>
        </li>
        <li>
          <a
            href={'https://github.com/' + SiteMeta.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github: {SiteMeta.social.github}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
