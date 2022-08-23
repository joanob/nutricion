import {Macro, Agua, Vitamins, Minerals } from '../services/nutrients';
import * as types from './types'

interface SetName {
    type: types.SET_NAME;
    payload: string
}

export const setName = (payload: string): SetName => ({
    type: types.SET_NAME,
    payload
})

interface SetRounds {
    type: types.SET_ROUNDS;
    payload: number;
}

export const setRounds = (payload: number): SetRounds => ({
    type: types.SET_ROUNDS,
    payload
})

interface AddMacro {
    type: types.ADD_MACRO,
    payload: Macro
}

export const addMacro = (payload: Macro): AddMacro => ({
    type: types.ADD_MACRO,
    payload
})

interface EmptyMacro {
    type: types.EMPTY_MACRO
}

export const emptyMacro = (): EmptyMacro => ({
    type: types.EMPTY_MACRO
})

interface ToggleVitamin {
    type: types.TOGGLE_VITAMIN
    payload: Vitamins
}

export const toggleVitamin = (payload: Vitamins): ToggleVitamin => ({
    type: types.TOGGLE_VITAMIN,
    payload
})

interface ToggleMineral {
    type: types.TOGGLE_MINERAL
    payload: Minerals
}

export const toggleMineral = (payload: Minerals): ToggleMineral => ({
    type: types.TOGGLE_MINERAL,
    payload
})

interface SetWater {
    type: types.SET_WATER,
    payload: Agua
}

export const setWater = (payload: Agua): SetWater => ({
    type: types.SET_WATER,
    payload
})

interface ToggleFiber {
    type: types.TOGGLE_FIBER
}

export const toggleFiber = (): ToggleFiber => ({
    type: types.TOGGLE_FIBER
})

interface RoundEnd {
    type: types.ROUND_END;
}

export const roundEnd = (): RoundEnd => ({
    type: types.ROUND_END
})

interface Reset {
    type: types.RESET;
}

export const reset = (): Reset => ({
    type: types.RESET
})

export type Action = SetName | SetRounds | AddMacro | EmptyMacro | ToggleVitamin | ToggleMineral | SetWater | ToggleFiber | RoundEnd | Reset