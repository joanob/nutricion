import { DEFAULT_ROUNDS } from "../config";
import { Food } from "../services/dataset";
import { getRandomFood } from "../services/foodService";
import { AGUA_MEDIO } from "../services/nutrients";

export interface State {
    name: string;
    rounds: number;
    score: number;
    maxScore: number;
    usedFood: Food[];
    food: Food;
    selected: Food["list"]
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

const initialState: State = {
    name: '',
    rounds: getDefaultRounds(),
    score: 0,
    maxScore: 0,
    usedFood: [],
    food: getRandomFood(),
    selected: {
        macro: [],
        vitamins: [],
        minerals: [],
        agua: AGUA_MEDIO,
        fibra: true
    }
}

export default initialState