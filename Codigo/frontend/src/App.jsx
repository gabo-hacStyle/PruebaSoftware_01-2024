import { useEffect, useState } from 'react'
import LoginUser from './pages/LoginUser'
import RegisterUser from './pages/RegisterUser'
import UserDashboard from './pages/UserDashboard'
import axios from 'axios';

axios.get('http://127.0.0.1:8000/users/')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

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
