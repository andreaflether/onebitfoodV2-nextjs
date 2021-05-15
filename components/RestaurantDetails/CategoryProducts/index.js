import { useState } from 'react'
import { Row, Col, Card, CardColumns } from 'react-bootstrap';
import Image from 'next/image'
import toBrlCurrency from '../../../services/toBrlCurrency';
import truncateString from '../../../services/truncateString';
import AddProductModal from '../../Modals/AddProduct'

export default function CategoryProducts(props) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return(
    <>
      <h5 className="fw-bold mt-3">{props.title}</h5>
      <CardColumns>
      <Row>
        {props.products.map((product, i) =>
          <Col md={4} sm={12} key={i}>
            <Card className="clickable-effect mb-3" onClick={() => setSelectedProduct(product)}>
              <Row className="my-3 mx-1">
                <Col md={6} xs={{span: 12, order: 2 }}>
                  <p className="fw-bold mb-0">{product.name}</p>
                  <p><small>{truncateString(product.description, 80)}</small></p>
                  <small className="border rounded dashed py-1 px-3 border-custom-gray fw-bold">
                    {toBrlCurrency(product.price)}
                  </small>
                </Col>

                <Col md={6} xs={{span: 12, order: 1}} >
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        )}
      </Row>
     </CardColumns>
     <AddProductModal 
       show={selectedProduct != null }
       onHide={() => setSelectedProduct(null)}
       product={selectedProduct}
       restaurant={props.restaurant}
     />
    </>
  )
}