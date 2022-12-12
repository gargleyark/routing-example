import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from './components'
import { routes } from './routes'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Menu routes={routes} />

        <hr />

        <Routes>
          {routes.map(({ path, pathName, Component }) => (
            <Route
              exact
              path={path}
              key={pathName}
              element={<Component heading={pathName} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
