import { RoutePointsType, RoutePointType } from '../types/types.ts'

export const convertRouteObjectToString = (routePoints: RoutePointsType): string => {
  console.log(routePoints)
  return routePoints
    .map((item: RoutePointType) => Object.values(item))
    .join(';')
}
