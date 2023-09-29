import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Singup from '../src/components/SingUp/Singup'
import Productos from './components/Productos/Productos';
import Home from '../src/components/Home/Home'
import Navegacion from './components/Navegacion/Navegacion';
function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Singup' element={<Singup />} />
        <Route path='/Productos' element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
