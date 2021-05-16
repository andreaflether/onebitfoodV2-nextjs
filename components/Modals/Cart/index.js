import { Modal, Button } from 'react-bootstrap'
import Link from 'next/link'
import Cart from '../../Cart'
import { useRecoilState } from 'recoil'
import cartState from '../../../store/atoms/cartAtom'

export default function CartModal(props) {
  const [cart] = useRecoilState(cartState)

  return(
    <Modal
      show={props.show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className="fw-bold mt-2">Carrinho</h5>
      </Modal.Header>
      <Modal.Body>
        <Cart show={props.show} />
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        {cart.products.length > 0 &&
          <Link href="/orders/new">
            <a>
              <Button variant="custom-red" className="text-white" onClick={() => props.onHide()}>
                Finalizar pedido
              </Button>
            </a>
          </Link>
        }
      </Modal.Footer>
    </Modal>
  )
}