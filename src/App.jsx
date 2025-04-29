import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import ShowPassword from './components/ShowPassword'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/show-password" element={<ShowPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/" exact element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
