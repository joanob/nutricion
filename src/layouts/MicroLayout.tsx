import React from "react";

import styles from "./MicroLayout.module.css";

interface Props {
  header: string;
  children: React.ReactNode;
}

const MicroLayout = ({ header, children }: Props) => {
  return (
    <article className={styles.article}>
      <header>{header}</header>
      <div>{children}</div>
    </article>
  );
};

export default MicroLayout;
