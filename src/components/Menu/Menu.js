import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px;
`

const MenuItem = styled.li`
  display: block;
  margin: 10px;
  padding: 0px 16px;
`

export const Menu = ({ routes = [] }) => (
  <MenuList>
    {routes.map(({ path, pathName }) => (
      <MenuItem key={pathName}>
        <Link to={path}>{pathName}</Link>
      </MenuItem>
    ))}
  </MenuList>
)
