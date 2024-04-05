import Image from "next/image"
import styles from "./workItems.module.css"

const WorkItems = () => {
  return (
    <li className={styles.workItem}>
    <div className={styles.imgContainer}>
      <Image
        className={styles.img}
        fill
        src={
          "https://cdn.dribbble.com/userupload/2995353/file/original-9f3ceb2d36d8e43a62f36726a8319894.png?resize=1024x768"
        }
        alt="blog"
      />
    </div>
    <span className={styles.listTitle}>Blog Web App</span>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      rerum, reiciendis assumenda at eligendi in, praesentium, fuga
      minima quisqua
    </p>
  </li>
  )
}

export default WorkItems