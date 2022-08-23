import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './gameSlice'
import routerSlice from './routerSlice'

export const store = configureStore({
  reducer: {
    route: routerSlice,
    game: gameSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch