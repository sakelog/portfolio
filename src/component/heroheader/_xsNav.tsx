import Image from 'next/image';

import SiteMeta from '../../config';

import navStyle from './_navItems.module.scss';
import socialStyle from './_socialLink.module.scss';
import styles from './_xsNav.module.scss';

const XSNav = () => {
  return (
    <nav className={styles.root}>
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
    </nav>
  );
};

export default XSNav;
