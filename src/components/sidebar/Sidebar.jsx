import Image from "next/image"
import styles from "./sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sideWrap}>
        <div className={styles.sideTop}>
        <span className={styles.about}>About me</span>
        <Image className={styles.img} width={150} height={150} src={"https://cdn.dribbble.com/users/154194/screenshots/17243772/media/847393002155596a40f9bc18e9cf94c8.jpg?resize=768x576&vertical=centerhttps://cdn.dribbble.com/users/154194/screenshots/17243772/media/847393002155596a40f9bc18e9cf94c8.jpg?resize=768x576&vertical=centerhttps://cdn.dribbble.com/users/154194/screenshots/17243772/media/847393002155596a40f9bc18e9cf94c8.jpg?resize=768x576&vertical=center"}/>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
          Nihil necessitatibus tempora quis. Vel veniam, maxime incidunt cum,
          ab ducimus accusamus blanditiis
            perspiciatis ut voluptatem reiciendis voluptas optio esse quis illo?
          </p>
        </div>
        
        <div className={styles.sideMid}>
          <span className={styles.midTitle}>Popular Categories</span>
          <ul className={styles.lists}>
            <li className={styles.list}>Music</li>
            <li className={styles.list}>Culture</li>
            <li className={styles.list}>Fashion</li>
            <li className={styles.list}>Art</li>
            <li className={styles.list}>Food</li>
            <li className={styles.list}>Travel</li>
            <li className={styles.list}>Coding</li>
          </ul>
        </div>

        <div className={styles.sideBottom}>
        <span className={styles.botomTitle}>FOLLOW US</span>
        <div className={styles.botomSocial}>
            <Image width={32} height={30} src={"/1.png"} />
            <Image width={32} height={30} src={"/2.png"} />
            <Image width={32} height={30} src={"/3.png"} />
            <Image width={32} height={30} src={"/4.png"}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar