import React from "react";

import styles from "./Button.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
