import React, { useContext } from "react";
import Context from "../context";
import { Minerals, Vitamins } from "../services/nutrients";
import classnames from "classnames";
import styles from "./MicroCard.module.css";
import { toggleMineral, toggleVitamin } from "../customStore/actions";

interface Props {
  children: React.ReactNode;
  nutrientStyle: string;
  unactiveStyle: string;
  nutrientType: "vitamins" | "minerals";
  nutrientValue: Vitamins | Minerals;
}

const MicroCard = (props: Props) => {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    if (props.nutrientType === "vitamins") {
      dispatch(toggleVitamin(props.nutrientValue as Vitamins));
    } else {
      dispatch(toggleMineral(props.nutrientValue as Minerals));
    }
  };

  let classNames = "";

  if (props.nutrientType === "vitamins") {
    if (
      state.selected.vitamins === undefined ||
      state.selected.vitamins.indexOf(props.nutrientValue as Vitamins) === -1
    ) {
      classNames = classnames(styles.cell, props.unactiveStyle);
    } else {
      classNames = classnames(styles.cell, props.nutrientStyle);
    }
  } else {
    if (
      state.selected.minerals === undefined ||
      state.selected.minerals.indexOf(props.nutrientValue as Minerals) === -1
    ) {
      classNames = classnames(styles.cell, props.unactiveStyle);
    } else {
      classNames = classnames(styles.cell, props.nutrientStyle);
    }
  }

  return (
    <div onClick={handleClick} className={classNames}>
      <p>{props.children}</p>
    </div>
  );
};

export default MicroCard;
