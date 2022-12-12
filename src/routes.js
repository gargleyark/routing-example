import { About, Contact, Home, Portfolio } from './pages'

export const routes = [
  {
    path: '/',
    pathName: 'Home',
    Component: Home,
  },
  {
    path: '/about',
    pathName: 'About',
    Component: About,
  },
  {
    path: '/portfolio',
    pathName: 'Portfolio',
    Component: Portfolio,
  },
  {
    path: '/contact',
    pathName: 'Contact',
    Component: Contact,
  },
]
