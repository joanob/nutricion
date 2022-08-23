import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GameState {
  name: string 
  rounds: number
  score: number 
  maxScore: number
}

// Define the initial state using that type
const initialState: GameState = {
  name: "",
  rounds: 0,
  score: 0,
  maxScore: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    incRound: (state) => {
        state.rounds = state.rounds + 1
    },
    addScore: (state, action: PayloadAction<number>) => {
        state.score = state.score + action.payload
    },
    addMaxScore: (state, action: PayloadAction<number>) => {
        state.maxScore = state.maxScore + action.payload
    }
  },
})

export const { setName, incRound, addScore, addMaxScore } = gameSlice.actions

export default gameSlice.reducer