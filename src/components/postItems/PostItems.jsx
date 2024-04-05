import styles from "./postItems.module.css"
import Image from "next/image"

const PostItems = () => {
  return (
    <div className={styles.postsWrapper}>
    <div className={styles.imgContainer}>
      <Image fill className={styles.postImg} src={"https://cdn.dribbble.com/userupload/12399047/file/original-f156eb59798746c1663f2d52c4e93b68.jpg?resize=1024x1661"} alt="postImg"/>
    </div>
    <span className={styles.title}>Lorem ipsum dolor sit amet</span>
    <div className={styles.info}>
      <span className={styles.cat}>Art</span>
      <span className={styles.date}>1 hour ago</span>
    </div>
    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptate sunt debitis nisi reprehenderit, minus ipsam. Provident,
      sed voluptatum voluptas iure aliquam maxime
      modi saepe consectetur culpa odio.
    </p>
  </div>
  )
}

export default PostItems