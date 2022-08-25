import React from "react";

import styles from "./Input.module.css";

interface Props {
  label: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NumberInput = ({ label, value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        min={1}
        className={styles.input}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;
