import React, { useContext } from "react";
import Context from "../context";
import { Footer, Header } from "../layouts";
import style from "./Nutrients.module.css";
import MacroCard from "../components/MacroCard";
import {
  AGUA_ALTO,
  AGUA_BAJO,
  AGUA_MEDIO,
  GLUC_COMP,
  GLUC_SIMP,
  LIPIDOS,
  PROTEINA,
  SALES,
  VITAMINAS,
} from "../services/nutrients";
import { emptyMacro, roundEnd } from "../store";
import ToggleCard from "../components/ToggleCard";
import MicroLayout from "../layouts/MicroLayout";

const Nutrients = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <Header title={state.food.name} />
      <main className={style.main}>
        <section className={style.macronutrients}>
          <h2>Macronutrientes</h2>
          <MacroCard
            nutrient="Glúcidos complejos"
            nutrientStyle={style.gc}
            nutrientValue={GLUC_COMP}
          />
          <MacroCard
            nutrient="Glúcidos sencillos"
            nutrientStyle={style.gs}
            nutrientValue={GLUC_SIMP}
          />
          <MacroCard
            nutrient="Lípidos"
            nutrientStyle={style.li}
            nutrientValue={LIPIDOS}
          />
          <MacroCard
            nutrient="Proteínas"
            nutrientStyle={style.pr}
            nutrientValue={PROTEINA}
          />
        </section>
        <section className={style.micronutrients}>
          <h2>Micronutrientes</h2>
          <MicroLayout />
          <MicroLayout />
        </section>
        <section className={style.waterfiber}>
          <h2>Agua</h2>
          <section className={style.water}>
            <ToggleCard
              text="< 30%"
              nutrientStyle={style.ag}
              unactiveStyle={style.ag_unactive}
              nutrientValue={AGUA_BAJO}
            />
            <ToggleCard
              text="30% - 60%"
              nutrientStyle={style.ag}
              unactiveStyle={style.ag_unactive}
              nutrientValue={AGUA_MEDIO}
            />
            <ToggleCard
              text="> 60%"
              nutrientStyle={style.ag}
              unactiveStyle={style.ag_unactive}
              nutrientValue={AGUA_ALTO}
            />
          </section>
          <h2>Fibra</h2>
          <ToggleCard
            text="Fibra"
            nutrientStyle={style.fi}
            unactiveStyle={style.fi_unactive}
            nutrientValue="fibra"
          />
        </section>
        <div className={style.buttons}>
          <div
            className={style.delete}
            onClick={() => {
              dispatch(emptyMacro());
            }}
          >
            Borrar
          </div>
          {/* CONTINUAR NECESSITA DOS CLICKS */}
          <div
            className={style.continue}
            onClick={() => {
              dispatch(roundEnd());
            }}
          >
            Continuar
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Nutrients;
