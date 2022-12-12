import { Link } from 'react-router-dom'

export const WithoutMenu = ({ children }) => (
  <div>
    There is no menu on this page, but you can go back to{' '}
    <Link to="/">Home</Link>
    <hr />
    {children}
  </div>
)
