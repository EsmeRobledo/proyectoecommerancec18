import {useContext} from 'react'
import {Row, Col, Badge, Button, Alert} from 'react-bootstrap'
import { CartContext } from '../../Context/Cart'


function CartItem({item}) {
    const { cart, decreaseProductFromCart, addProductToCart } = useContext(CartContext)

    return(
        <Row>
            <Col md={2}>
                <Button variant="light" className='m-2 mt-0' onClick={
                    () => {decreaseProductFromCart(item)}
                }>-</Button>
                <Badge bg="dark" style={{ fontSize: '1.1em' }}>{item.quantity}</Badge>
                <Button variant="success" className='m-2 mt-0' onClick={
                    () => {addProductToCart(item)}
                }>+</Button>
            </Col>
            <Col>{item.category}</Col>
            <Col>
                {item.title}
            </Col>
            <Col>
                {item.description && item.description.length? (
                        item.description
                    ): (
                        <Alert variant='warning'>No hay descripción</Alert>
                    )
                }
            </Col>
            <Col>
                { item.price}
            </Col>

            <Col>
                { item.price * item.quantity }
            </Col>
        </Row>
    )
}

export default CartItem