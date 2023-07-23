import { routesData, RoutesDataType } from './routesData.ts'

export interface IMenuItems {
  key: number
  title: string
  routePoints: RoutesDataType
}

export const menuItems: IMenuItems[] = [
  {
    key: 1,
    title: 'Маршрут №1',
    routePoints: routesData.path1,
  },
  {
    key: 2,
    title: 'Маршрут №2',
    routePoints: routesData.path2,
  },
  {
    key: 3,
    title: 'Маршрут №3',
    routePoints: routesData.path3,
  },
]
