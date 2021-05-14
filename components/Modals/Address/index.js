import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal'
import AddressForm from './AddressForm'

import { useRecoilState } from 'recoil'

import addressState from '../../../store/atoms/addressAtom'

export default function AddressModal(props) {
  const router = useRouter()
  const [address] = useRecoilState(addressState)

  useEffect(() => {
    if(router.asPath != '/' && address.city == '') props.onShow()
  }, [router])

  return(
    <Modal
      show={props.show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <h5 className="fw-bold mt-2">Endereço de entrega</h5>
      </Modal.Header>
      <Modal.Body>
        <AddressForm
          onHide={() => props.onHide()}
        />
      </Modal.Body>
    </Modal>
  )
}