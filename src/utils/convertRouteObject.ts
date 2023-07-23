import { RoutePointsType, RoutePointType } from '../types/types.ts'

export const convertRouteObjectToString = (routePoints: RoutePointsType): string => {
  return routePoints
    .map((item: RoutePointType) => Object.values(item))
    .join(';')
}

export const convertRouteObjectToArray = (routePoints: RoutePointsType): [number, number][] => {
  // @ts-ignore
  return routePoints
    .map((item: RoutePointType) => Object.values(item).reverse())
}
