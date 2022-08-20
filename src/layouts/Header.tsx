import React, { useContext } from "react";
import Context from "../context";

import style from "./Header.module.css";

type Props = {
  title: string;
  isWelcome?: boolean;
};

/**
 * Header prints title, user name and score.
 * Score is a string so in welcome page it can be an empty string
 */
const Header = ({ title, isWelcome }: Props) => {
  const { state } = useContext(Context);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{title}</h1>
        </div>
        <div className={style.info}>
          <div>{state.name}</div>
          <div>{isWelcome ? "" : state.score + "/" + state.maxScore}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
