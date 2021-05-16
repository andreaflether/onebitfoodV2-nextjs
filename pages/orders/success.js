import { Row, Col, Card } from 'react-bootstrap'
import Image from 'next/image'

export default function Success() {
  return(
    <Row className="mt-4 justify-content-md-center text-center">
      <Col md={5}>
        <Card className="mt-2 p-4">
          <h4 className="fw-bold">Pedido confirmado!</h4>
          <p className="text-muted">O restaurante já está preparando o seu pedido.</p>
          
          <Row className="justify-content-md-center">
            <Col md={10}>
              <Image 
                src="/status-ok.png"
                alt="Pedido realizado com sucesso"
                objectFit={"cover"}
                width={200}
                height={200}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}