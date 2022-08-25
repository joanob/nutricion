import React, { useState } from "react";
import Button from "../../components/button";
import NumberInput from "../../components/input/NumberInput";
import SubmitInput from "../../components/input/SubmitInput";
import TextInput from "../../components/input/TextInput";
import { DEFAULT_ROUNDS } from "../../config";
import PageLayout from "../../layouts/PageLayout";
import dataset from "../../services/dataset";
import { setName as setStoreName, setGameRounds } from "../../store/gameSlice";
import { useAppDispatch } from "../../store/hooks";
import { setRoute } from "../../store/routerSlice";

import styles from "./Landing.module.css";

const Landing = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [rounds, setRounds] = useState(DEFAULT_ROUNDS);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      alert("Escribe un nombre");
      return;
    }
    if (rounds < 1) {
      alert("Debes jugar al menos una ronda");
      return;
    }
    if (rounds > dataset.length) {
      alert("No hay alimentos para jugar tantas rondas");
      return;
    }
    dispatch(setStoreName(name));
    dispatch(setGameRounds(rounds));
    dispatch(setRoute("/game"));
  };

  return (
    <PageLayout>
      <div className={styles.page}>
        <form className={styles.play_form} onSubmit={handleSubmit}>
          <TextInput
            label="Nombre"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <NumberInput
            label="Rondas"
            value={rounds}
            onChange={(e) => {
              setRounds(Number(e.target.value));
            }}
          />
          <SubmitInput value="Jugar" />
        </form>
        <div className={styles.score_button}>
          <Button
            text="Ver puntuaciones"
            onClick={() => {
              dispatch(setRoute("/scorelist"));
            }}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Landing;
