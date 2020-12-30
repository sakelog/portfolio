import Image from 'next/image';
import { FiChevronsDown } from 'react-icons/fi';

import SocialLink from './_socialLink';
import NavItems from './_navItems';
import XSNav from './_xsNav';

import styles from './heroheader.module.scss';

const HeroHeader = () => {
  return (
    <>
      <nav className={styles.heroheader}>
        <div className={styles.bgWrap}>
          <Image
            alt="HeroHeader"
            src="/img/heroheader.png"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <section className={styles.navContent}>
          <div>
            <SocialLink />
            <NavItems />
          </div>
          <a href="#profile">
            <span className={styles.bottomButton}>
              <FiChevronsDown />
            </span>
          </a>
        </section>
      </nav>
      <XSNav />
    </>
  );
};

export default HeroHeader;