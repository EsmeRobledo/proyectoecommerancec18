import React from 'react'
import { Card, Button } from 'react-bootstrap'


function Productos() {
  return (
    <>
    <div>
       
       <div className='cards-wrap'>
        
         {/* {productos.map( (producto, index) => {
           return( */}
             <Card className='card-menu'  style={{ width: '18rem', background: 'transparent' }}>
             <Card.Img variant="top" src="" />
             <Card.Body>
               <Card.Title></Card.Title>
               <Card.Text>
               
               </Card.Text>
               <Button variant="primary">Comprar</Button>
             </Card.Body>
           </Card>
           {/* )
         })} */}
        
       </div>
       </div>
    </>
  )
}

export default Productos