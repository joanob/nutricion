import React, { useContext } from "react";
import Context from "../context";
import { Agua } from "../services/nutrients";
import classnames from "classnames";
import style from "./ToggleCard.module.css";
import { emptyWater, setWater, toggleFiber } from "../store/actions";

interface Props {
  text: string;
  nutrientStyle: string;
  unactiveStyle: string;
  nutrientValue: Agua | "fibra";
}

const ToggleCard = (props: Props) => {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    if (props.nutrientValue === "fibra") {
      dispatch(toggleFiber());
    } else {
      if (state.selected.agua === props.nutrientValue) {
        dispatch(emptyWater());
      } else {
        dispatch(setWater(props.nutrientValue));
      }
    }
  };

  let classNames = "";

  if (props.nutrientValue === "fibra") {
    if (state.selected.fibra) {
      classNames = classnames(style.cell, props.nutrientStyle);
    } else {
      classNames = classnames(style.cell, props.unactiveStyle);
    }
  } else {
    if (state.selected.agua === undefined) {
      classNames = classnames(style.cell, props.unactiveStyle);
    } else {
      if (props.nutrientValue === state.selected.agua) {
        classNames = classnames(style.cell, props.nutrientStyle);
      } else {
        classNames = classnames(style.cell, props.unactiveStyle);
      }
    }
  }

  return (
    <article onClick={handleClick} className={classNames}>
      {props.text}
    </article>
  );
};

export default ToggleCard;
