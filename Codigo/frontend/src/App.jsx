import { useState } from 'react'
import LoginUser from './pages/LoginUser'
import RegisterUser from './pages/RegisterUser'
import UserDashboard from './pages/UserDashboard'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/user" element={<UserDashboard />}>
              
            </Route>
            <Route path="/login" element={<LoginUser />}>
              
            </Route>
            <Route path="/register" element={<RegisterUser />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
