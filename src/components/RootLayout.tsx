import React from 'react'
import { FallOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { routesData, RoutesDataType } from '../constants/routesData.ts'
import { useAppDispatch } from '../hooks/redux.ts'
import { setCurrentRoutePoints } from '../store/slices/mapSlice.ts'
import { RoutePointsType } from '../types/types.ts'
import { fetchRoute } from '../store/sagaActions/mapSagaActions.ts'

const { Content, Sider } = Layout

interface IRootLayout {
  children: React.ReactElement
}

interface IMenuItems {
  key: number
  title: string
  routePoints: RoutesDataType
}

const menuItems: IMenuItems[] = [
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

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  const dispatch = useAppDispatch()

  const handleChangeRoute = (routePoints: RoutePointsType) => {
    dispatch(setCurrentRoutePoints(routePoints))
    dispatch(fetchRoute(routePoints))
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible={false}
        collapsed={false}
        breakpoint='xs'
        collapsedWidth='0'>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          {menuItems.map((item: IMenuItems) => (
            <Menu.Item
              key={item.key}
              icon={<FallOutlined />}
              onClick={() => handleChangeRoute(item.routePoints)}>
              <span>{item.title}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ width: '100%', height: '100%' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default RootLayout
