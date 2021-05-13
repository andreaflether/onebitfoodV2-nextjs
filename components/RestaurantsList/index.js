import React from 'react'
import { Row, Col, Spinner, Alert }  from 'react-bootstrap'
import { FaExclamationTriangle } from 'react-icons/fa'
import Restaurant from '../RestaurantsList/Restaurant'
import getRestaurants from '../../services/getRestaurants'

export default function RestaurantsList() {
  const { restaurants, isLoading, isError } = getRestaurants()

  function renderContent() {
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
    } else if(!restaurants.length) {
      return <Col>Nenhum restaurante disponível.</Col>
    } else {
      return restaurants.map((restaurant, i) => <Restaurant {...restaurant} key={i}/>)
    }
  }

  return(
    <div className="mt-5">
      <h3 className="fw-bold mb-4">Restaurantes</h3>
      <Row>
        {renderContent()}
      </Row>
    </div>
  )
}