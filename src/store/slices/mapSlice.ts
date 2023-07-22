import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RoutePointType } from '../../types/types.ts'

interface IMapState {
  coordinates: [number, number][] | null
  currentRoutePoints: RoutePointType[] | null
  error: string | null
}

const initialState: IMapState = {
  coordinates: null,
  currentRoutePoints: null,
  error: null,
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    fetchRouteSuccess: (
      state: IMapState,
      action: PayloadAction<[number, number][]>
    ) => {
      state.coordinates = action.payload
      state.error = null
    },
    fetchRouteFailure: (state: IMapState, action: PayloadAction<string>) => {
      state.error = action.payload
      state.coordinates = null
    },
    setCurrentRoutePoints: (
      state: IMapState,
      action: PayloadAction<RoutePointType[]>
    ) => {
      state.currentRoutePoints = action.payload
    },
  },
})
export const {
  fetchRouteSuccess,
  fetchRouteFailure,
  setCurrentRoutePoints,
} = mapSlice.actions

export default mapSlice
