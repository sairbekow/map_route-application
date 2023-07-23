import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RoutePointType } from '../../types/types.ts'
import { routesData } from '../../constants/routesData.ts'

interface IMapState {
  currentSelectedRoutePoints: RoutePointType[]
  routeGeometry: string | null
  error: string | null
}

const initialState: IMapState = {
  currentSelectedRoutePoints: routesData.path1,
  routeGeometry: null,
  error: null,
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    fetchRouteSuccess: (state: IMapState, action: PayloadAction<string>) => {
      state.routeGeometry = action.payload
      state.error = null
    },
    fetchRouteFailure: (state: IMapState, action: PayloadAction<string>) => {
      state.error = action.payload
      state.routeGeometry = null
    },
    setcurrentSelectedRoutePoints: (
      state: IMapState,
      action: PayloadAction<RoutePointType[]>
    ) => {
      state.currentSelectedRoutePoints = action.payload
    },
  },
})
export const {
  fetchRouteSuccess,
  fetchRouteFailure,
  setcurrentSelectedRoutePoints,
} = mapSlice.actions

export default mapSlice
