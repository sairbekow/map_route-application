import React from 'react'
import { Layout, Menu } from 'antd'
import { useAppDispatch } from '../hooks/redux.ts'
import { setcurrentSelectedRoutePoints } from '../store/slices/mapSlice.ts'
import { RoutePointsType } from '../types/types.ts'
import { IMenuItems, menuItems } from '../constants/menuItems.ts'
import { FallOutlined } from '@ant-design/icons'

const { Content, Sider } = Layout

interface IRootLayout {
  children: React.ReactElement
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  const dispatch = useAppDispatch()

  const handleChangeRoute = (routePoints: RoutePointsType) => {
    dispatch(setcurrentSelectedRoutePoints(routePoints))
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
