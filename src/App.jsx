import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>

    </Routes>
  </Router>
  )
}

export default App
