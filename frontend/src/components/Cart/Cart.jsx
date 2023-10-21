import React, { useContext } from 'react'
import { CartContext } from '../../Context/Cart'
import { Row, Col, ListGroup } from 'react-bootstrap'
import CartItemHeader from './CartItemHeader'
import CartItem from './CartItem'
function Cart() {
  const {cart} = useContext(CartContext)
  //iva varia segun el pais 
  const IVA = 0.16
    return (
    <>
        <div>
           {cart.items && cart.items.length > 0 ?
        (
            <>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>
                                <CartItemHeader/>
                            </ListGroup.Item>
                             {
                                cart.items.map(item => {
                                    return(
                                        <ListGroup.Item>
                                                <CartItem item = {item}/>
                                        </ListGroup.Item>
                                    )
                                })
                             }   
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Productos:{cart.total}
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Subtotal: {cart.amount}
                    </Col>
                </Row>
                <Row>
                    <Col>
                             <span className='text-bold'> A pagar <sub>(Subtotal + IVA)</sub></span>: { cart.amount * (1 + IVA)}
                    </Col>
                </Row>


            </>
        ):(
            <h1>No hay productos en el carrito</h1>
        )   
        } 
        </div>
    </>
  )
}

export default Cart