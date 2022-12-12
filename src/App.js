import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Menu } from './components'
import { routes } from './routes'
import { GlobalStyles } from './global'
import { theme } from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
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
      </>
    </ThemeProvider>
  )
}

export default App
