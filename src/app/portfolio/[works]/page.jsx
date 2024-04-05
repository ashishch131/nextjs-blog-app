import styles from "./work.module.css";
import WorkItems from "@/components/workItems/WorkItems";

const WorkPage = () => {
  return (
    <div className={styles.work}>
      <div className={styles.workWrap}>
        <ul className={styles.workItems}>
         <WorkItems/>
          <WorkItems />
          <WorkItems />
          <WorkItems />
          <WorkItems />
          <WorkItems/>
          <WorkItems />
          <WorkItems />
          <WorkItems />
          <WorkItems/>
        </ul>
      </div>
    </div>
  );
};

export default WorkPage;
