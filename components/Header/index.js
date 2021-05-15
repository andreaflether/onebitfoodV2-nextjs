import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import SearchBox from '../SearchBox'
import AddressModal from '../Modals/Address'
import CartModal from '../Modals/Cart'
import { FaCrosshairs, FaShoppingBag } from 'react-icons/fa'
import cartLength from '../../helpers/cartLength'
import currentAddress from '../../helpers/currentAddress'

export default function Header() {
  const [addressModalShow, setAddressModalShow] = useState(false)
  const [cartModalShow, setCartModalShow] = useState(false)

  return (
    <Navbar bg="white" expand="lg" className="border-bottom border-custom-gray">
      <Navbar.Brand className="mx-3">
        <Link href="/restaurants">
          <a className="d-flex align-items-center">
            <Image 
              src="/logo.png"
              alt="OneBitFood"
              width={200}
              height={44}
              className="clickable-effect mt-1"/>
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-lg-4 me-sm-0">
          <span className="clickable-effect text-custom-red" onClick={() => setCartModalShow(true)}>
            <FaShoppingBag className="mb-1" /> Carrinho ({cartLength()})
          </span>
          <CartModal
            show={cartModalShow}
            onHide={() => setCartModalShow(false)} 
            onShow={() => setCartModalShow(true)} 
          />
        </Nav>
        <Nav className="py-2">
          <span className="clickable-effect text-custom-red" onClick={() => setAddressModalShow(true)}>
            <FaCrosshairs className="mb-1" /> { currentAddress() }
          </span>
          <AddressModal
            show={addressModalShow}
            onHide={() => setAddressModalShow(false)} 
            onShow={() => setAddressModalShow(true)} 
          />
        </Nav>
        <SearchBox />
      </Navbar.Collapse>
    </Navbar>
  )
}