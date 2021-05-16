import Details from './Details';
import CategoryProducts from './CategoryProducts';
import { Spinner, Alert, Col } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa'

export default function RestaurantDetails(props) { 
  /*
  if(props.isError) {
    return(
    <Col>
      <Alert variant="custom-red">
        <FaExclamationTriangle className="me-2 mb-1"/> Erro ao carregar este recurso.
      </Alert>
    </Col>
    )
  }
  */
  return(
    <>
      <Details {...props.restaurant} />
      {props.restaurant.product_categories.map((product_category, i) =>
        <CategoryProducts restaurant={props.restaurant} {...product_category} key={i} />
      )}
    </>
  )
}