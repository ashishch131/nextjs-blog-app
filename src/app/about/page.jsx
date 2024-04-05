import Image from "next/image";
import styles from "./about.module.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.top}>
          <Image
            width={150}
            height={150}
            className={styles.img}
            src="https://cdn.dribbble.com/userupload/9982640/file/original-03d49d6f18e21c133798adc0bbac3fe1.jpg?resize=1024x768"
            alt=""
          />
          <h1 className={styles.title}>HEY, I'M ASHISH:)</h1>
          <span className={styles.title2}>
            A Full Stack focused Web Developer building the Frontend & Backend
            of Websites and Web
          </span>
          <span className={styles.title3}>
            Applications that leads to the success of the overall product
          </span>
          <button className={styles.projectBtn}>PROJECTS</button>
        </div>
        <div className={styles.center}>
          <h1 className={styles.aboutMe}>About me</h1>
          <span className={styles.aboutDesc1}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms
          </span>
          <span className={styles.aboutDesc2}>
            of programming and technology
          </span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <h1 className={styles.bottomTitle}>Get to know me!</h1>
            <p className={styles.bottomDesc}>
              I'm a Full Stack Web Developer building the Frontend & Backend of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the Projects
              section. I also like sharing content related to the stuff that I
              have learned over the years in Web Development so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my Linkedin where I post useful content related to Web
              Development and Programming I'm open to Job opportunities where I
              can contribute, learn and grow. If you have a good opportunity
              that matches my skills and experience then don't hesitate to
              contact me.
            </p>
            <button className={styles.contactBtn}>
            <LocalPhoneIcon/>
              Contact</button>
          </div>
          <div className={styles.bottomRight}>
            <h1 className={styles.sklTitle}>My Skills</h1>
            <ul className={styles.skills}>
              <li className={styles.skill}>HTML</li>
              <li className={styles.skill}>CSS</li>
              <li className={styles.skill}>SCSS</li>
              <li className={styles.skill}>JAVASCRIPT</li>
              <li className={styles.skill}>NODEJS</li>
              <li className={styles.skill}>REACTJS</li>
              <li className={styles.skill}>MONGODB</li>
              <li className={styles.skill}>NEXTJS</li>
              <li className={styles.skill}>GITHUB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
