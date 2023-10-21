import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import {CartContext} from '../../Context/Cart'
import { useNavigate } from 'react-router-dom'

function Productos() {
const [productos, setProductos] = useState([])
const {addProductToCart} = useContext(CartContext)
const navigate = useNavigate()

const verMas = (id) =>{
  navigate(`/ProdDetalle/${id}`)
}
useEffect(() =>{
    fetch("http://localhost:3002/productos/getProdList")
    .then(req => req.json()).then(response =>{
        console.log(response)
        setProductos(response.data)
    })
}, [])

  return (
    <>
    <div>
       
       <div className='cards-wrap'>
         {productos.map( (producto, index) => {
           return(
             <Card className='card-menu' key={index} style={{ width: '18rem', background: 'transparent' }}>
             <Card.Img variant="top" src="" />
             <Card.Body>
               <Card.Title>{producto.nombre}</Card.Title>
               <Card.Text>
               {producto.descripcion}
               </Card.Text>
               <Card.Text>
               {producto.precio}
               </Card.Text>
               <Card.Text>
               {producto.existencias}
               </Card.Text>

               <Button variant="primary" onClick={() => addProductToCart(producto)}>Comprar</Button>
               <Button variant="primary" onClick={() => verMas(producto.id)}>Ver Mas..</Button>
             </Card.Body>
           </Card>
           )
         })} 
        
       </div>
       </div>
    </>
  )
}

export default Productos