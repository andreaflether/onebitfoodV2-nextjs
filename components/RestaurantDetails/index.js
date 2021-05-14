import Details from './Details';
import CategoryProducts from './CategoryProducts';
import getRestaurant from '../../services/getRestaurant';
import { useRouter } from 'next/router';
import { Spinner, Alert, Col } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa'

export default function RestaurantDetails() {
 const router = useRouter();
 const { id } = router.query;
 
 const { restaurant, isLoading, isError } = getRestaurant(id);
 
 if(isError) {
   return(
    <Col>
      <Alert variant="custom-red">
        <FaExclamationTriangle className="me-2 mb-1"/> Erro ao carregar este recurso.
      </Alert>
    </Col>
   )
 } else if(isLoading) {
   return <Col><Spinner animation="border" /></Col>
 }
  return(
    <>
      <Details {...restaurant} />
      {restaurant.product_categories.map((product_category, i) =>
        <CategoryProducts restaurant={restaurant} {...product_category} key={i} />
      )}
    </>
  )
}