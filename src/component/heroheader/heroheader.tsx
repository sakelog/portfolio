import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

import SocialLink from './_socialLink';
import NavItems from './_navItems';
import XSNav from './_xsNav';

import styles from './heroheader.module.scss';

const HeroHeader = () => {
  const [innerHeight, setInnerHeight] = React.useState(400);

  function handleInnerHeight() {
    setInnerHeight(window.innerHeight);
  }

  React.useEffect(() => {
    handleInnerHeight();
    window.addEventListener('orientationchange', () => {
      handleInnerHeight();
    });
    window.addEventListener('resize', () => {
      handleInnerHeight();
    });
  });

  return (
    <>
      <nav className={styles.heroheader} style={{ height: innerHeight }}>
        <section className={styles.navContent}>
          <div>
            <SocialLink />
            <NavItems />
          </div>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className={styles.bottomButton}>
              <FiChevronsDown />
            </span>
          </Link>
        </section>
      </nav>
      <XSNav />
    </>
  );
};

export default HeroHeader;
