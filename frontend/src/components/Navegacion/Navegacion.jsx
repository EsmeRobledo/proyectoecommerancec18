import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav } from 'react-bootstrap';
import { UserContext } from '../../Context/UserContext';
import './Navegacion.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Badge } from 'react-bootstrap'
import * as Icon from 'react-icons/fa'
import {CartContext} from '../../Context/Cart'

function Navegacion() {
  const {auth, logout} = useContext(UserContext)
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { cart } = useContext( CartContext )
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const logOut = () => logout()

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>
          <Link onClick={closeMobileMenu} className='navbar-logo'> MiTiendita
          <Icon.FaOldRepublic/>
          </Link>     
 <div className='menu-icon' onClick={handleClick}>
    {click ? <Icon.FaTimes/> : <Icon.FaBars/>} 
    </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><Link className='nav-links' to="/"  onClick={closeMobileMenu}>Home</Link></li>
          <li className='nav-item'><Link className='nav-links' to="/Productos" onClick={closeMobileMenu}>Productos</Link></li>
          <li className='nav-item'><Link className='nav-links' to="/LogIn" onClick={closeMobileMenu}>Log In</Link></li> 
          <li className='nav-item'>{auth && <Link className='nav-links' to="/Singup" onClick={closeMobileMenu}>Sign Up</Link>}</li>
        </ul>
        <Nav.Link href="/cart/list"><Badge><FaShoppingCart /> {cart.total}</Badge></Nav.Link>
        {!auth && button && <Button className='btn' variant="outline-secondary" onClick={logOut}>Exit</Button>}
     </div>
    </nav>
       
    </>
  )
}

export default Navegacion