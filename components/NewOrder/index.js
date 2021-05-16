import { Row, Col, Card } from 'react-bootstrap'
import Cart from '../Cart'
import OrderForm from './OrderForm'

export default function NewOrder() {
  return(
    <>
      <Row className="justify-content-md-center">
        <Col md={{span: 5}}>
          <Card className="p-4 mb-4">
            <Cart />
          </Card>
        </Col>
        <Col md={{span: 5}} >
          <Card className="p-4 mb-4">
            <OrderForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}