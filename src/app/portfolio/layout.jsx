import styles from "./portfolio.module.css"

const layout = ({children}) => {
  return (
      <div className={styles.layout}>
          <h1 className={styles.layoutTitle}>My Work</h1>
          {children}</div>
  )
}

export default layout