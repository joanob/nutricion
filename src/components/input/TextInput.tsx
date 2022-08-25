import React from "react";

import styles from "./Input.module.css";

interface Props {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({ label, value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        className={styles.input}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
