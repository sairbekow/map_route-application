import { createAction } from '@reduxjs/toolkit'

export const FETCH_ROUTE = 'map/fetchRoute'
export const fetchRoute = createAction(FETCH_ROUTE, (payload) => ({ payload }))

