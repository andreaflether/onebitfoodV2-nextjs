import { Row, Col, Button } from 'react-bootstrap'
import truncateString from '../../helpers/truncateString'
import toBrlCurrency from '../../helpers/toBrlCurrency'
import { useRecoilState } from 'recoil'
import cartState from '../../store/atoms/cartAtom'

export default function Cart(props) {
  const [cart, setCart] = useRecoilState(cartState)

  const subTotal = () => cart.products.reduce(
    (a, b) => a + (parseFloat(b['price']) * parseFloat(b['quantity']) || 0), 0
  )

  const total = () => cart.restaurant.delivery_tax + subTotal()

  if (cart.products.length <= 0) return <p>O carrinho está vazio.</p>

  const removeProduct = (product) => {
    const newProducts = cart.products.filter((p) => p.id != product.id)
    setCart({ restaurant: { ...cart.restaurant }, products: newProducts })
  }

  return (
    <>
      <h5 className="fw-bolder">{cart.restaurant.name}</h5>
      <hr />
      {cart.products.map((product, i) =>
        <div key={product.id} className="mb-2" key={i}>
          <Row>
            <Col md={8} xs={8}>
              <small className="fw-bolder">{product.quantity}x {product.name}</small>
            </Col>
            <Col md={4} xs={4} className="text-right">
              <small >
                {toBrlCurrency(product.price)}
              </small>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={8} xs={8}>
              <p><small>{truncateString(product.description, 40)}</small></p>
            </Col>
            <Col md={4} xs={4} className="text-right">
              <Button
                size="sm"
                variant="outline-secondary"
                onClick={() => removeProduct(product)}
                className="border border-custom-gray"
              >
                Remover
              </Button>
            </Col>
          </Row>
        </div>
      )}
      <hr />
      <Row className="mt-4">
        <Col md={8} xs={8}>
          <p>Subtotal</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p>{toBrlCurrency(subTotal())}</p>
        </Col>
      </Row>
      <Row className="mt-n2">
        <Col md={8} xs={8}>
          <p>Taxa de entrega</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p>{toBrlCurrency(cart.restaurant.delivery_tax)}</p>
        </Col>
        <hr />
      </Row>
      <Row className="mb-0 text-custom-red fw-bolder">
        <Col md={8} xs={8}>
          <p>Total</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p>{toBrlCurrency(total())}</p>
        </Col>
      </Row>
    </>
  )
}