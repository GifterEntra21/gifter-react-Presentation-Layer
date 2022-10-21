import React from "react";
import styles from "../ProgressBar/ProgressBar.module.css"

const ProgressBar = (props) => {
  const { completed } = props;
  //containerStyles
  let style = styles.containerStyles;
  if (completed === 100) {
    style = styles.endStyle;
  }
  return (
    <div className={style}>
      <div className={styles.fillerStyles} style={{"--completed":`${completed}%`}}>
        <span className={styles.labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;