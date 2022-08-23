import React, { useContext } from "react";
import Context from "../context";
import { Footer, Header } from "../layouts";
import style from "./Nutrients.module.css";
import MacroCard from "../components/MacroCard";
import {
  AGUA_ALTO,
  AGUA_BAJO,
  AGUA_MEDIO,
  B1,
  B9,
  B12,
  C,
  A,
  D,
  E,
  VitK,
  GLUC_COMP,
  GLUC_SIMP,
  LIPIDOS,
  PROTEINA,
  CA,
  P,
  K,
  MG,
  FE,
  I,
  ZN,
  SE,
} from "../services/nutrients";
import { emptyMacro, roundEnd } from "../store";
import ToggleCard from "../components/ToggleCard";
import MicroLayout from "../layouts/MicroLayout";
import MicroCard from "../components/MicroCard";

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
          <MicroLayout header="Vitaminas">
            <>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={B1}
              >
                B<sub>1</sub>, B<sub>2</sub>
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={B9}
              >
                B<sub>9</sub>
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={B12}
              >
                B<sub>12</sub>
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={C}
              >
                C
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={A}
              >
                A
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={D}
              >
                D
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={E}
              >
                E
              </MicroCard>
              <MicroCard
                nutrientStyle={style.vi}
                unactiveStyle={style.fi_unactive}
                nutrientType="vitamins"
                nutrientValue={VitK}
              >
                K
              </MicroCard>
            </>
          </MicroLayout>
          <MicroLayout header="Minerales">
            <>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={CA}
              >
                Ca
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={P}
              >
                P
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={K}
              >
                K
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={MG}
              >
                Mg
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={FE}
              >
                Fe
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={I}
              >
                I
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={ZN}
              >
                Zn
              </MicroCard>
              <MicroCard
                nutrientStyle={style.sm}
                unactiveStyle={style.sm_unactive}
                nutrientType="minerals"
                nutrientValue={SE}
              >
                Se
              </MicroCard>
            </>
          </MicroLayout>
        </section>
        <section className={style.waterfiber}>
          <h2>Agua</h2>
          <section className={style.water}>
            <ToggleCard
              text="< 40%"
              nutrientStyle={style.ag}
              unactiveStyle={style.ag_unactive}
              nutrientValue={AGUA_BAJO}
            />
            <ToggleCard
              text="40% - 75%"
              nutrientStyle={style.ag}
              unactiveStyle={style.ag_unactive}
              nutrientValue={AGUA_MEDIO}
            />
            <ToggleCard
              text="> 75%"
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
