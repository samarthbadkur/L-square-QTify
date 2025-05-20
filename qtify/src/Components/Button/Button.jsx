import React from "react";
import styles from "./Button.module.css";

function Button({ buttonData }) {
  return (
    
    <button className={styles.button}>{buttonData}</button>
  );
}

export default Button;
