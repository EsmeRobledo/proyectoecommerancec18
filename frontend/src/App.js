import './App.css';
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Singup from './components/SignUp/Singup'
import Productos from './components/Productos/Productos';
import Home from '../src/components/Home/Home'
import Navegacion from './components/Navegacion/Navegacion';
import Login from './components/Login/Login';
import { UserContext } from './Context/UserContext';
import Cart from './components/Cart/Cart';

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
        <Route path='/cart/list' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
