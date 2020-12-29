import styles from './contactform.module.scss';

const ContactForm = () => {
  return (
    <section className={styles.root}>
      <h2 id="contact">お問い合わせ</h2>
      <form name="portfolio-contact" method="POST" data-netlify="true">
        <div className={styles.form_wrapper}>
          <div className={styles.form_item}>
            <label>
              <span>お名前</span>
              <div className={styles.input_control}>
                <input type="text" name="name" placeholder="サンプル　花子" />
              </div>
            </label>
          </div>
          <div className={styles.form_item}>
            <label>
              <span>メールアドレス</span>
              <div className={styles.input_control}>
                <input
                  type="email"
                  name="mail"
                  placeholder="hogehoge@sample.com"
                />
              </div>
            </label>
          </div>
          <div className={styles.form_item}>
            <label>
              <span>本文</span>
              <div className={styles.input_control}>
                <textarea name="message" rows={8} />
              </div>
            </label>
          </div>
          <button type="submit">送信</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
