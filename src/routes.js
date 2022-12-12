import { WithMenu, WithoutMenu } from './layouts'
import { About, Contact, Home, Portfolio } from './pages'

export const routes = [
  {
    path: '/',
    pathName: 'Home',
    Component: Home,
    Layout: WithMenu,
  },
  {
    path: '/about',
    pathName: 'About',
    Component: About,
    Layout: WithMenu,
  },
  {
    path: '/portfolio',
    pathName: 'Portfolio',
    Component: Portfolio,
    Layout: WithoutMenu,
  },
  {
    path: '/contact',
    pathName: 'Contact',
    Component: Contact,
    Layout: WithMenu,
  },
]
