import { put, call, takeEvery } from 'redux-saga/effects'
import {
  fetchRouteSuccess,
  fetchRouteFailure,
} from '../store/slices/mapSlice.ts'
import { getOSRMGeometry } from '../services/api.ts'
import { RoutePointsType } from '../types/types.ts'
import { Action, PayloadAction } from '@reduxjs/toolkit'
import { FETCH_ROUTE } from '../store/sagaActions/mapSagaActions.ts'
import { convertRouteObjectToString } from '../utils/convertRouteObject.ts'

export function* fetchRouteWorker(
  actionPayload: PayloadAction<RoutePointsType>
) {
  try {
    const parsedRoutePoints = convertRouteObjectToString(actionPayload.payload)
    const response = yield call(getOSRMGeometry, parsedRoutePoints)
    yield put(fetchRouteSuccess(response.data.routes[0].geometry))
  } catch (error) {
    yield put(fetchRouteFailure('Ошибка получения маршрута'))
    throw new Error('Произошла ошибка при выполнении запроса')
  }
}

interface TaskAction extends Action, PayloadAction<RoutePointsType> {
  type: 'FETCH_ROUTE'
}

function* rootSaga() {
  yield takeEvery<TaskAction>(FETCH_ROUTE, fetchRouteWorker)
}

export default rootSaga
