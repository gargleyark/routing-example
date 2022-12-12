import { Link } from 'react-router-dom'

export const Menu = ({ routes = [] }) => (
  <ul>
    {routes.map(({ path, pathName }) => (
      <li key={pathName}>
        <Link to={path}>{pathName}</Link>
      </li>
    ))}
  </ul>
)
