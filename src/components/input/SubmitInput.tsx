import React from "react";

import styles from "./Input.module.css";

interface Props {
  value: string;
}

const SubmitInput = ({ value }: Props) => {
  return <input type="submit" className={styles.submit} value={value} />;
};

export default SubmitInput;
