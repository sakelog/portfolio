import { Link, Element } from 'react-scroll';
import { FiChevronUp } from 'react-icons/fi';
import { FaBoxOpen, FaTwitter } from 'react-icons/fa';

import SiteMeta from '../../config';
import styles from './contactform.module.scss';

const ContactForm = () => {
  return (
    <Element name="contact">
      <section className={styles.root}>
        <h2>お問い合わせ</h2>
        <a
          href="https://tayori.com/form/bc8c9ed063615c7b537921ddb3cf12bfe0b0a701"
          className="c__button--primary"
        >
          お問い合わせはこちらのフォームから
        </a>
        <ul className={styles.icons}>
          <li>
            <a
              href="https://peing.net/ja/sake_engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="c__iconLink"
            >
              <span className="c__iconLink__icon">
                <FaBoxOpen />
              </span>
              質問箱
            </a>
          </li>
          <li>
            <a
              href={'https://twitter.com/' + SiteMeta.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="c__iconLink"
            >
              <span className="c__iconLink__icon">
                <FaTwitter />
              </span>
              Twitter
            </a>
          </li>
        </ul>
        <span className="c__scrollButton">
          <span className="c__scrollButton--toUp">
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              duration={500}
            >
              <FiChevronUp />
            </Link>
          </span>
        </span>
      </section>
    </Element>
  );
};

export default ContactForm;
