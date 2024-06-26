import React from 'react';
import { Carousel, Col, Container } from 'react-bootstrap';
import ExampleCarouselImage from './Components/wordpress-923188_1280.jpg';
import ExampleCarouselImage2 from './Components/agenda-968603_1280.jpg';
import ExampleCarouselImage3 from './Components/write-4491437_1280.jpg';
import './Card.css';

function UncontrolledExample() {
  return (
    <Container fluid>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <Carousel style={{ width: 'auto', maxWidth: '800px', maxHeight:'600px' }}> {/* Adjusted width */}
          <Carousel.Item interval={1000}>
            <img src={ExampleCarouselImage} alt="First slide" className="d-block w-100" style={{ objectFit: 'cover', width: '100%', height: '600px' }} />
            <Carousel.Caption>
              <h3>Welcome to Your Blogging Journey!</h3>
              <p>Start sharing your thoughts, experiences, and ideas with the world.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={ExampleCarouselImage2} alt="Second slide" className="d-block w-100" style={{ objectFit: 'cover', width: '100%', height: '600px' }} />
            <Carousel.Caption>
              <h3>Discover New Perspectives</h3>
              <p>Explore diverse topics and engage with a global audience.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={ExampleCarouselImage3} alt="Third slide" className="d-block w-100" style={{ objectFit: 'cover', width: '100%', height: '600px' }} />
            <Carousel.Caption>
              <h3>Share Your Passion</h3>
              <p>Express yourself through compelling stories and captivating content.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Container>
  );
}

export default UncontrolledExample;
