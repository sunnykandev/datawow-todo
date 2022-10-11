import React from "react";
import styles from "./Progress.module.css";

export default function Progress({
  totalNum,
  doneNum,
}: {
  totalNum: number;
  doneNum: number;
}) {
  const [percent, setPercent] = React.useState<number>(0);

  React.useEffect(() => {
    setPercent((doneNum / totalNum) * 100);
  }, [totalNum, doneNum]);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressTitle}>Progress</div>
      <div className={styles.progressRail}>
        <div
          className={styles.progressTrack}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className={styles.progressDescription}>{doneNum} Completed</div>
    </div>
  );
}
