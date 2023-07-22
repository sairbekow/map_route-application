import { combineReducers, configureStore } from '@reduxjs/toolkit'
import routeSlice from './slices/mapSlice.ts'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/saga.ts'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  map: routeSlice.reducer,
})

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store
