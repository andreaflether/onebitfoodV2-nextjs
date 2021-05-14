import { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function Search(e) {
    e.preventDefault()
    router.push(`/restaurants?q=${query}`)
  }

  return(
    <Form className="d-flex mx-5 my-2" onSubmit={(e) => Search(e)}>

        <InputGroup>
          <Form.Control 
            type="text"
            placeholder="Buscar restaurantes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-describedby="search-btn"
          />  
            <Button variant="outline-custom-red" type="submit" id="searchBtn">
              <FaSearch className="mb-1"/>
            </Button>
        </InputGroup>

      
    </Form>
  )
}