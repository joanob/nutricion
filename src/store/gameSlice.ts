import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  name: string;
  gameRounds: number;
  roundsPlayed: number;
  score: number;
  maxScore: number;
}

// Define the initial state using that type
const initialState: GameState = {
  name: "",
  gameRounds: 0,
  roundsPlayed: 0,
  score: 0,
  maxScore: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setGameRounds: (state, action: PayloadAction<number>) => {
      state.gameRounds = action.payload;
    },
    incRoundsPlayed: (state) => {
      state.roundsPlayed = state.roundsPlayed + 1;
    },
    addScore: (state, action: PayloadAction<number>) => {
      state.score = state.score + action.payload;
    },
    addMaxScore: (state, action: PayloadAction<number>) => {
      state.maxScore = state.maxScore + action.payload;
    },
  },
});

export const {
  setName,
  setGameRounds,
  incRoundsPlayed,
  addScore,
  addMaxScore,
} = gameSlice.actions;

export default gameSlice.reducer;
