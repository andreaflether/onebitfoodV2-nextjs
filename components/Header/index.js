import Navbar from 'react-bootstrap/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import SearchBox from '../SearchBox'

export default function Header() {
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
        <SearchBox />
      </Navbar.Collapse>
    </Navbar>
  )
}