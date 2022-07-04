import React, { useContext } from 'react'
import classnames from "classnames"
import style from "./NutrientCard.module.css"
import Context from '../context';
import { Nutrient } from '../services/nutrients';
import { addMacro, addMicro } from '../store';

export const MACRO = "macro"
export const MICRO = "micro"

interface IProps {
    nutrient: string;
    nutrientStyle: string;
    nutrientValue: Nutrient
    nutrientGroup: typeof MACRO | typeof MICRO;
}

const NutrientCard = (props: IProps) => {

    const {state, dispatch} = useContext(Context)

    const index = state.selected[props.nutrientGroup]?.indexOf(props.nutrientValue)
    
    let classNames = ""

    if (state.selected[props.nutrientGroup] === undefined || index === -1) {
        // Not found, not selected 
        classNames = classnames(style.cell, props.nutrientStyle)
    } else {
        classNames = classnames(style.cell, style.active, props.nutrientStyle)
    }

    const handleClick = () => {
        if (props.nutrientGroup === MACRO) {
            dispatch(addMacro(props.nutrientValue))
        } else {
            dispatch(addMicro(props.nutrientValue))
        }
    }

    return (
        <article onClick={handleClick} className={classNames}>
            {props.nutrient}
            <div>{index === -1 || index === undefined ? "" : index + 1}</div>
        </article>
  )
}

export default NutrientCard