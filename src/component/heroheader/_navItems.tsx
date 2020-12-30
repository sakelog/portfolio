import { FiSmile, FiFolder, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

import styles from './_navItems.module.scss';
import SiteMeta from '../../config';

const NavItems = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.siteTitle}>{SiteMeta.title}</h1>
      <p>{SiteMeta.description}</p>
      <ul className={styles.menuItems}>
        <li>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className={styles.icon}>
              <FiSmile />
            </span>
            <span>PROFILE</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className={styles.icon}>
              <FiFolder />
            </span>
            <span>WORKS</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className={styles.icon}>
              <FiMail />
            </span>
            <span>CONTACT</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
