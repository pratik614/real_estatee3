import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
  <Router>
    <Header />
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>

    </Routes>
    <Toaster />
  </Router>
  )
}

export default App
