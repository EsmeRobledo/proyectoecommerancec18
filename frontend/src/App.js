import './App.css';
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Singup from './components/SignUp/Singup'
import Productos from './components/Productos/Productos';
import Home from '../src/components/Home/Home'
import Navegacion from './components/Navegacion/Navegacion';
import Login from './components/Login/Login';
import { UserContext } from './Context/UserContext';

function App() {
  const { auth } = useContext(UserContext);

  return (
    <>
      <Navegacion />
      <Routes>
        <Route path='/' element={<Home />} />
        {!auth.token && <Route path='/LogIn' element={<Login />} />}
        <Route path='/Singup' element={<Singup />} />
        <Route path='/Productos' element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
