import { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Alert, Button } from 'react-bootstrap'
import createOrder from '../../../services/createOrder'
import { useRecoilState, useResetRecoilState } from 'recoil'
import addressState from '../../../store/atoms/addressAtom'
import cartState from '../../../store/atoms/cartAtom'

export default function OrderForm() {
  const [cart, setCart] = useRecoilState(cartState)
  const [address, setAddress] = useRecoilState(addressState)
  const resetCart = useResetRecoilState(cartState)
  const [error, setError] = useState(null)
  const router = useRouter()

  const [order, setOrder] = useState({
    name: '',
    phone_number: '',
    ...address,
    order_products_attributes: cart.products.map(p => (
      {
        'product_id': p.id, 'quantity': p.quantity
      }
    )),
    restaurant_id: cart.restaurant.id
  })

  const updateOrderState = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  const submitOrder = async (e) => {
    e.preventDefault()

    try {
      await createOrder(order)
      router.push('/orders/success')
      resetCart()
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Form onSubmit={e => submitOrder(e)}>
      <h4 className="fw-bold mb-4">Detalhes finais</h4>
      <Form.Group>
        <Form.Label>Nome completo</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="John Doe"
          onChange={updateOrderState}
          value={order.name}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="(00) 00000-0000"
          onChange={updateOrderState}
          value={order.phone_number}
          name="phone_number"
        />
      </Form.Group>

      <div className="mt-4">
        <p className="fw-bolder mb-2">Entregar em:</p>
        <p className="small">
          {address.street} {address.number} {address.neighborhood}, {address.city}
        </p>
      </div>
      {cart.products.length > 0 &&
        <div className="text-center">
          <Button variant="custom-red" type="submit" size="lg" className="mt-3 text-white">
            Finalizar Pedido
         </Button>
        </div>
      }

      {error && <Alert variant="custom-red" className="mt-4">Erro ao realizar pedido.</Alert>}
    </Form>
  )
}