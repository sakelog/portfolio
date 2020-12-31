import Image from 'next/image';
import { FaTwitter, FaGithub } from 'react-icons/fa';

import SiteMeta from '../../config';

import navStyle from './_navItems.module.scss';
import socialStyle from './_socialLink.module.scss';
import styles from './_xsNav.module.scss';

const XSNav = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.top}>
        <div className={socialStyle.profileImage}>
          <Image
            src="/img/profile.png"
            alt="sake プロフィール画像"
            width={50}
            height={50}
            layout="intrinsic"
            loading="lazy"
          />
        </div>
        <h1 className={navStyle.siteTitle}>{SiteMeta.title}</h1>
      </div>
      <div className={styles.bottom}>
        <a
          href={'https://twitter.com/' + SiteMeta.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href={'https://github.com/' + SiteMeta.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default XSNav;
