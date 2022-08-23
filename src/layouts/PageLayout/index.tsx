import React from "react";
import { useAppSelector } from "../../store/hooks";

import style from "./PageLayout.module.css";

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  const gameState = useAppSelector((state) => state.game);
  return (
    <>
      <header className={style.header}>
        <div className={style.header_container}>
          <div className={style.header_title}>
            <h1>{gameState.name === "" ? "Nutrición" : gameState.name}</h1>
          </div>
          <div className={style.header_info}>
            <div>{gameState.name === "" ? "" : gameState.name}</div>
            <div>
              {gameState.name === ""
                ? ""
                : gameState.score + "/" + gameState.maxScore}
            </div>
          </div>
        </div>
      </header>
      <main className={style.main}>{children}</main>
      <footer>
        Joan Oltra Blasco GNU GPL 2022. Instagram:{" "}
        <a href="https://instagram.com/ob.joan" target="_blank">
          @ob.joan
        </a>
      </footer>
    </>
  );
};

export default PageLayout;
