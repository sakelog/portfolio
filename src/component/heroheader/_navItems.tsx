import styles from './_navItems.module.scss';
import { FiSmile, FiFolder, FiMail } from 'react-icons/fi';

import SiteMeta from '../../config';

const NavItems = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.siteTitle}>{SiteMeta.title}</h1>
      <p>{SiteMeta.description}</p>
      <ul className={styles.menuItems}>
        <li>
          <a href="#profile">
            <span className={styles.icon}>
              <FiSmile />
            </span>
            <span>PROFILE</span>
          </a>
        </li>
        <li>
          <a href="#work">
            <span className={styles.icon}>
              <FiFolder />
            </span>
            <span>WORKS</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span className={styles.icon}>
              <FiMail />
            </span>
            <span>CONTACT</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
