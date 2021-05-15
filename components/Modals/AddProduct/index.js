import { useState } from 'react'
import Image from 'next/image'
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import toBrlCurrency from '../../../services/toBrlCurrency'
import truncateString from '../../../services/truncateString'

import { useRecoilState } from 'recoil'

import cartState from '../../../store/atoms/cartAtom'

export default function AddProductModal(props) {
  const [cart, setCart] = useRecoilState(cartState)
  const [quantity, setQuantity] = useState(1)

  const addProduct = (e) => {
    e.preventDefault()

    const product = {...props.product, ...{'quantity': quantity}}

    if(cart.restaurant.id != props.restaurant.id) {
      setCart({restaurant: props.restaurant, products: [product]})
    } else {
      setCart({restaurant: props.restaurant, products: [...cart.products, product]})
    }
    setQuantity(1)
    props.onHide()
  }
  
  if(!props.product) return null

  return(
    <Modal
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      size="sm"
      centered
      keyboard={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className="fw-bold mt-2">Adicionar produto</h5>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Image
              src={props.product.image_url}
              alt={props.product.name}
              width={300}
              height={200}
            />
          </Col>
        </Row>
        <Row className="pb-0">
          <Col>
            <p className="fw-bold mb-0">{props.product.name}</p>
            <p className="mb-2"><small>{truncateString(props.product.description, 60)}</small></p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 ">
            <small className="border rounded dashed py-1 px-3 border-custom-gray fw-bold">
              {toBrlCurrency(props.product.price)}
            </small>
          </Col>
        </Row>
        <Form onSubmit={addProduct} className="d-flex">
          <Form.Group>
            <Form.Control
              required
              type="number"
              placeholder="quantidade"
              min="1" step="1"
              name="quantidade"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
          <Button variant="custom-red" type="submit" className="text-white ms-6">
            Adicionar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}