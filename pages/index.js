import { Button, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { FaCrosshairs } from 'react-icons/fa'
import Typewriter from '../components/Typewriter'

export default function Home() {
  return (
    <Row className="mt-7 justify-content-center">
      <Col md={7} xs={8} className="text-center">
        <h1 className="fw-bolder text-custom-gray-darker mb-3 lh-base display-5">
          <Typewriter text="O jeito mais fácil de pedir delivery de comida :)" />
        </h1>
        <p className="text-custom-gray-darker">Descubra restaurantes e mercados perto de você</p>
        <Link href="/restaurants">
          <Button variant="custom-red" size="lg" className="text-white">
            <FaCrosshairs className="pb-1"/>
            <span className="text-uppercase px-2 fw-bolder">Encontrar agora</span>
          </Button>
        </Link>
      </Col>
    </Row>
  )
}
