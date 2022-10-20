import React from "react";
import styles from "../ProgressBar/ProgressBar.module.css"

const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <div className={styles.containerStyles} style={completed === 100?{display:"none"} : {}}>
      <div className={styles.fillerStyles} style={{"--completed":`${completed}%`}}>
        <span className={styles.labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;