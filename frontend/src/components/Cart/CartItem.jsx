import React, { useContext } from 'react'
import { CartContext } from '../../Context/Cart'
import { Badge, Button } from 'react-bootstrap'
import {Col, Row} from 'react-bootstrap'

function CartItem({item}) {
    const {decreaseProd, addProduct} = useContext(CartContext)
  return (
    <Row>
        <Col md={2}>
            <Button variant='light' className='m-2 mt-0' onClick={() => {decreaseProd(item)}}>-</Button>
            <Badge bg='dark' style={{fontSize: '1.1em'}}>{item.quantity}</Badge>
            <Button variant='sucess' className='m-2 mt-0' onClick={() => {addProduct(item)}}>+</Button>
        </Col>
        <Col>{item.title}</Col>
        <Col>
        {item.description}
        </Col>
        <Col>
        {item.price}
        </Col>
        <Col>
        {(item.price * item.quantity)}
        </Col>
    </Row>
  )
}

export default CartItem