import { Link, Element } from 'react-scroll';
import { FiChevronUp } from 'react-icons/fi';

import styles from './contactform.module.scss';

const ContactForm = () => {
  return (
    <Element name="contact">
      <section className={styles.root}>
        <h2>お問い合わせ</h2>
        <a
          href="https://tayori.com/form/bc8c9ed063615c7b537921ddb3cf12bfe0b0a701"
          className={styles.button}
        >
          お問い合わせはこちらのフォームから
        </a>
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
