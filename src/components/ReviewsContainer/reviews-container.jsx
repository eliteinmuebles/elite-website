import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import client1 from '../../assets/images/cliente-1.jpg'
import client2 from '../../assets/images/cliente-2.jpg'

const reviews = [
  {
    image: client1,
    name: 'Nombre del Cliente 1',
    stars: 5,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image: client2,
    name: 'Nombre del Cliente 2',
    stars: 4,
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

export const ReviewContainer = () => (
    <Container>
    <h1 className="text-center">Clientes felices</h1>
    <Row>
      {reviews.map((review, index) => (
        <Col key={index} md={6}>
          <div style={{ backgroundColor: '#E8CA93', margin: '10px', padding: '10px' }}>
          <Row>
           
            <Col style={{display:"flex", gap:"1rem", margin:"1rem"}}>
                <Image src={review.image} roundedCircle />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2>{review.name}</h2>
                <StarRatings
                    rating={review.stars}
                    starRatedColor="#D09426"
                    numberOfStars={5}
                    name='rating'
                    starDimension="18px"
                />
                </div>
            </Col>
            </Row>
            <Row style={{margin:"1rem"}}>
              <p>{review.review}</p>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ReviewContainer;
