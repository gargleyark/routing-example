import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {routes.map(({ path, pathName, Component, Layout }) => (
            <Route
              exact
              path={path}
              key={pathName}
              element={
                <Layout>
                  <Component heading={pathName} />
                </Layout>
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
