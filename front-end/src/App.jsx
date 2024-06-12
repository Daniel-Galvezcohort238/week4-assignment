import './App.css'
import Login from './pages/login';
import LoginOrRegister from './pages/loginOrRegister';
import Register from './pages/register';
import { Navigate, Route, Routes } from "react-router-dom";


function App() {

  return (
<Routes>
        <Route path="/" element={<LoginOrRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
  )
}

export default App
