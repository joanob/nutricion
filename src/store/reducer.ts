import { Food } from "../services/dataset"
import { getRandomFood } from "../services/foodService"
import { Vitamins } from "../services/nutrients"
import { Action } from "./actions"
import initialState, {State} from "./initialState"
import * as types from "./types"

const reducer = (state: State, action: Action): State => {
    const {type} = action 

    switch (type) {
        case types.SET_NAME:
            return {...state, name: action.payload}
        case types.SET_ROUNDS:
            return {...state, rounds: action.payload}
        case types.ADD_MACRO: 
            const macro = state.selected.macro ? [...state.selected.macro] : []
            macro.push(action.payload)
            return {...state, selected: {...state.selected, macro: macro}}
        case types.EMPTY_MACRO:
            return {...state, selected: {...state.selected, macro: []}}
        case types.TOGGLE_VITAMIN:
            const vitamins = state.selected.vitamins
            if (vitamins === undefined) {
                return {...state, selected: {...state.selected, vitamins: [action.payload]}}
            }
            let index = vitamins.indexOf(action.payload)
            if (index === -1) {
                vitamins.push(action.payload)
            } else {
                delete vitamins[index]
            }
            return {...state, selected: {...state.selected, vitamins}}
        case types.TOGGLE_MINERAL:
            const minerals = state.selected.minerals
            if (minerals === undefined) {
                return {...state, selected: {...state.selected, minerals: [action.payload]}}
            }
            index = minerals.indexOf(action.payload)
            if (index === -1) {
                minerals.push(action.payload)
            } else {
                delete minerals[index]
            }
            return {...state, selected: {...state.selected, minerals}}
        case types.SET_WATER:
            return {...state, selected: {...state.selected, agua: action.payload}}
        case types.EMPTY_WATER:
            return {...state, selected: {...state.selected, agua: undefined}}
        case types.TOGGLE_FIBER:
            return {...state, selected: {...state.selected, fibra: state.selected.fibra ? false : true}}
        case types.ROUND_END:
            const [roundScore, maxRoundScore] = getRoundScore(state.food, state.selected)
            const usedFood = [...state.usedFood]
            usedFood.push(state.food)
            const newFood = getNewFood(usedFood)
            return {...state, rounds: state.rounds - 1, score: state.score + roundScore, maxScore: state.maxScore + maxRoundScore, usedFood: usedFood, food: newFood, selected: {}}
        case types.RESET:
            return initialState
        default:
            return state
    }
}

export default reducer

const getRoundScore = (food: Food, selected: State["selected"]): [number, number] => {
    // Macro score
    const [macroScore, macroMaxScore] = getGroupScore(selected.macro ? selected.macro : [], food.list.macro ? food.list.macro : [])
    // Micro score
    const [microScore, microMaxScore] = getGroupScore(selected.micro ? selected.micro : [], food.list.micro ? food.list.micro : [])
    // Agua y fibra 
    let score = 0;
    let maxScore = 0;
    if (selected.agua !== undefined) {
        maxScore = maxScore + 2
        if (selected.agua === food.list.agua) {
            score = score + 2
        }
    }
    if (selected.fibra !== undefined) {
        maxScore = maxScore + 2
        if (selected.fibra === food.list.fibra) {
            score = score + 2
        }
    }
    return [macroScore + microScore + score, macroMaxScore + microMaxScore + maxScore]
}

/**
 * Acertar index: 2 punts
 * Altre index: 1 punt
 */
const getGroupScore = (selected: number[], expected: number[]): [number, number] => {
    let score = 0;
    for (let i = 0; i < expected.length; i++) {
        for (let j = 0; j < selected.length; j++) {
            if (expected[i] === selected[j]) {
                score = i === j ? score + 2 : score + 1
            }
        }
    }
    return [score, expected.length * 2]
}

const getNewFood = (usedFood: Food[]): Food => {
    let newFood: Food
    do {
        newFood = getRandomFood()
    } while (usedFood.indexOf(newFood) !== -1);
    return newFood
}