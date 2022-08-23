import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LandingRoute, Routes } from '../domain/Routes'
import { RootState } from './store'

interface RouterState {
  route: Routes
}

const initialState: RouterState = {
  route: LandingRoute
}

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<Routes>) => {
      state.route = action.payload
    },
  },
})

export const { setRoute } = routerSlice.actions

export default routerSlice.reducer