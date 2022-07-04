import { IFood } from '../services/dataset';
import {Nutrient,  Agua } from '../services/nutrients';
import { IState } from './initialState';
import * as types from './types'

interface ISetName {
    type: types.SET_NAME;
    payload: string
}

export const setNameStore = (payload: string): ISetName => ({
    type: types.SET_NAME,
    payload
})

interface ISetRounds {
    type: types.SET_ROUNDS;
    payload: number;
}

export const setRoundsStore = (payload: number): ISetRounds => ({
    type: types.SET_ROUNDS,
    payload
})

interface IAddMacro {
    type: types.ADD_MACRO,
    payload: number
}

export const addMacro = (payload: number): IAddMacro => ({
    type: types.ADD_MACRO,
    payload
})

interface IAddMicro {
    type: types.ADD_MICRO,
    payload: number
}

export const addMicro = (payload: number): IAddMicro => ({
    type: types.ADD_MICRO,
    payload
})

interface ISetWater {
    type: types.SET_WATER,
    payload: Agua
}

export const setWater = (payload: Agua): ISetWater => ({
    type: types.SET_WATER,
    payload
})

interface IToggleFiber {
    type: types.TOGGLE_FIBER
}

export const toggleFiber = (): IToggleFiber => ({
    type: types.TOGGLE_FIBER
})

interface IEmptySelected {
    type: types.EMPTY_SELECTED
}

export const emptySelected = (): IEmptySelected => ({
    type: types.EMPTY_SELECTED
})

interface IRoundEnd {
    type: types.ROUND_END;
}

export const roundEnd = (): IRoundEnd => ({
    type: types.ROUND_END
})

interface IReset {
    type: types.RESET;
}

export const reset = (): IReset => ({
    type: types.RESET
})

export type TAction = ISetName | ISetRounds | IAddMacro | IAddMicro | ISetWater | IToggleFiber | IEmptySelected | IRoundEnd | IReset