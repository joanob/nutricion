import { DEFAULT_ROUNDS } from "../config";
import { IFood } from "../services/dataset";
import { getRandomFood } from "../services/foodService";

export interface IState {
    name: string;
    rounds: number;
    score: number;
    maxScore: number;
    usedFood: IFood[];
    food: IFood;
    selected: IFood["list"]
    lastScoreListEntry?: {
        name: string
        scorePercent: number 
        // date in miliseconds
        date: number
    }
}

const getDefaultRounds = () => {
    const roundsString = localStorage.getItem("rounds")
    if (roundsString) {
        return parseInt(roundsString)
    } else {
        return DEFAULT_ROUNDS
    }
}

const initialState: IState = {
    name: '',
    rounds: getDefaultRounds(),
    score: 0,
    maxScore: 0,
    usedFood: [],
    food: getRandomFood(),
    selected: {}
}

export default initialState