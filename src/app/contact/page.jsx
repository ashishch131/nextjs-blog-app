import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactWrap}>
        <div className={styles.left}>
          <img
            className={styles.img}
            fill
            src="https://cdn.dribbble.com/users/486498/screenshots/5612294/onboarding4.2_4x.png?resize=768x576&vertical=center"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
            <input className={styles.input} placeholder="name" type="text" autoFocus/>
            <input className={styles.input} placeholder="email" type="email" />
            <textarea className={styles.input} placeholder="message"  type="text" />
            <button className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
