import Image from "next/image"
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.Header}>

      <div className={styles.headerWrapper}>

        <div className={styles.headLeft}>
          <h1 className={styles.title}>Crafting Innovative Web Solution</h1>
            <h1 className={styles.title2}>for Your Bussiness</h1>
          <p className={styles.desc}>Welcome to my Web Development services!
            I am a dedicated web developer, commited to bringing your digital 
            vision to life with cutting, edge technologies and stunning design.
          </p>
          <button className={styles.button}>See Works</button>
        </div>

        <div className={styles.headRight}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={"https://cdn.dribbble.com/userupload/12372367/file/original-fd2b5f1dc5dd4bfe0b83b86c70e73278.jpg?resize=1024x768&vertical=center"} alt="featuredImg"></Image>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header