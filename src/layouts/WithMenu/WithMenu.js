import { routes } from '../../routes'
import { Menu } from '../../components'

export const WithMenu = ({ children }) => (
  <div>
    <Menu routes={routes} />
    <hr />
    {children}
  </div>
)
