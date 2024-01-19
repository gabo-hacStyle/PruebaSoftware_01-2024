import LoginUser from './pages/LoginUser'
import RegisterUser from './pages/RegisterUser'
import UserDashboard from './pages/UserDashboard'





import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

//Router principal
function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path="/dashboard" element={<UserDashboard />}>
              
            </Route>
            <Route path="/login" element={<LoginUser />}>
              
            </Route>
            <Route path="/register" element={<RegisterUser />}>
              
            </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
