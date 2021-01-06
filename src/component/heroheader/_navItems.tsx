import { FiSmile, FiFolder, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

import styles from './_navItems.module.scss';
import SiteMeta from '../../config';

const NavItems = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.siteTitle}>{SiteMeta.title}</h1>
      <p className={styles.description}>{SiteMeta.description}</p>
      <p className={styles.callToAction}>
        <a
          href="https://tayori.com/form/bc8c9ed063615c7b537921ddb3cf12bfe0b0a701"
          className="c__button--invert"
        >
          お問い合わせはこちらのフォームから
        </a>
      </p>
      <ul className={styles.menuItems}>
        <li>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
            className="c__iconLink"
          >
            <span className="c__iconLink__icon">
              <FiSmile />
            </span>
            <span>プロフィール</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            className="c__iconLink"
          >
            <span className="c__iconLink__icon">
              <FiFolder />
            </span>
            <span>制作物</span>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="c__iconLink"
          >
            <span className="c__iconLink__icon">
              <FiMail />
            </span>
            <span>お問い合わせ</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
