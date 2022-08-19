import React, { useState, useContext } from "react";
import Context from "../context";
import { Footer, Header } from "../layouts";
import { setName as setNameStore, setRounds as setRoundsStore } from "../store";
import style from "./Welcome.module.css";

/**
 * Welcome page allows user to select user name and read score list
 */
const Welcome = (props: { showScorelist: () => void }) => {
  const { state, dispatch } = useContext(Context);

  const [name, setName] = useState(state.name);
  const [rounds, setRounds] = useState(state.rounds);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name !== "") {
      dispatch(setNameStore(name));
    }
    if (rounds > 0) {
      localStorage.setItem("rounds", rounds.toString());
      dispatch(setRoundsStore(rounds));
    }
  };

  return (
    <>
      <Header title="Nutrientes" isWelcome />
      <main className={style.main}>
        <form onSubmit={submitHandler} className={style.form}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="maxRounds">Alimentos</label>
          <input
            type="number"
            id="maxRounds"
            min={1}
            value={rounds}
            onChange={(e) => {
              setRounds(Number(e.target.value));
            }}
          />
          <input type="submit" value="Jugar" />
        </form>
        <a onClick={props.showScorelist}>Ver puntuaciones</a>
      </main>
      <Footer />
    </>
  );
};

export default Welcome;
