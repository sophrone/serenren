import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      {/* You can use any loading animation here */}
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
