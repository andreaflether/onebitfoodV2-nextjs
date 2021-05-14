import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import SearchBox from '../SearchBox'
import AddressModal from '../Modals/Address'
import { FaCrosshairs } from 'react-icons/fa'

export default function Header() {
  const [addressModalShow, setAddressModalShow] = useState(false)

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
        <Nav className="py-2 text-center">
          <span className="clickable-effect text-custom-red" onClick={() => setAddressModalShow(true)}>
            <FaCrosshairs className="mb-1" /> Endereço
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