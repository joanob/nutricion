import React, { useContext } from "react";
import classnames from "classnames";
import style from "./MacroCard.module.css";
import Context from "../context";
import { addMacro } from "../customStore";
import { Macro } from "../services/nutrients";

interface Props {
  nutrient: string;
  nutrientStyle: string;
  nutrientValue: Macro;
}

const MacroCard = (props: Props) => {
  const { state, dispatch } = useContext(Context);

  const position = state.selected.macro?.indexOf(props.nutrientValue);

  let classNames = "";
  if (state.selected.macro === undefined || position === -1) {
    // Not found, not selected
    classNames = classnames(style.cell, props.nutrientStyle);
  } else {
    classNames = classnames(style.cell, style.active, props.nutrientStyle);
  }

  const handleClick = () => {
    dispatch(addMacro(props.nutrientValue));
  };

  return (
    <article onClick={handleClick} className={classNames}>
      {props.nutrient}
      <div>{position === -1 || position === undefined ? "" : position + 1}</div>
    </article>
  );
};

export default MacroCard;
