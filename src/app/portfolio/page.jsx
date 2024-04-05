import Link from "next/link";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.porfolio}>
      <h1 className={styles.catTitle}>Choose Categories</h1>
      <div className={styles.porfolioWrap}>
        <Link className={styles.link} href={"/portfolio/web-apps"}>
          <span className={styles.linkItem}>Web Applications</span>
        </Link>
        <Link className={styles.link} href={"/portfolio/websites"}>
          <span className={styles.linkItem}>Websites</span>
        </Link>
        <Link className={styles.link} href={"/portfolio/mob-app"}>
          <span className={styles.linkItem}>Mobile Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
