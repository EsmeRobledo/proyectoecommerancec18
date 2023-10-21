import {Row, Col, Alert} from 'react-bootstrap'

function CartItemHeader() {
    const headerFieldColor = "secondary"

    return(
        <Row>
            <Col>
                <Alert variant={headerFieldColor}>Cantidad</Alert>
            </Col>
            <Col>
                <Alert variant={headerFieldColor}>Categoria</Alert>
            </Col>
            <Col>
                <Alert variant={headerFieldColor}>Producto</Alert>
            </Col>
            <Col>
                <Alert variant={headerFieldColor}>Detalle</Alert>
            </Col>
            <Col>
                <Alert variant={headerFieldColor}>Precio</Alert>
            </Col>
            <Col>
                <Alert variant={headerFieldColor}>Subtotal</Alert>
            </Col>
        </Row>
    )

}

export default CartItemHeader