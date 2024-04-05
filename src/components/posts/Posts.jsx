
import styles from "./post.module.css"
import PostItems from "../postItems/PostItems"

const Posts = () => {
  return (
    <div className={styles.posts}>
      <PostItems />
      <PostItems />
      <PostItems />
      <PostItems/>
      </div>
  )
}

export default Posts