import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import InvoiceList from './pages/InvoiceList'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const routeData = [
    {
      id: 101,
      path: '/',
      exact: true,
      main: <Login />,
    },
    {
      id: 102,
      path: '/home',
      main: <Home />,
    },
    {
      id: 103,
      path: '/register',
      main: <Register />,
    },
    {
      id: 105,
      path: '/invoice-list',
      main: <InvoiceList />,
    },
  ]
  return (
    <Router>
      <Routes>
        {routeData.map((items) => (
          <Route
            key={items.id}
            exact={items.exact}
            path={items.path}
            element={items.main}
          />
        ))}
        {/* <Redirect to="/" /> */}
      </Routes>
    </Router>
  )
}

export default App
