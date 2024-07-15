import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import LandingPage from './components/landingPage/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
