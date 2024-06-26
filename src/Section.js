import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import cardimg1 from './Components/card1.jpg';
import cardimg2 from './Components/card2.jpg';
import cardimg3 from './Components/card4.jpg';
import cardimg4 from './Components/card3.jpg';
import cardimg5 from './Components/card5.jpg';
import cardimg6 from './Components/card6.jpg';
import cardimg7 from './Components/card7.jpg';
import cardimg8 from './Components/card8.jpg';
import './Card.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


import InputGroup from 'react-bootstrap/InputGroup';






function AutoLayoutSizingExample() {
    const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};
  return (
    <Container>
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cardimg1} />
            <Card.Body>
              <Card.Title>Discover Nature</Card.Title>
              <Card.Text>
                Explore the beauty of nature with our collection of stunning landscapes. 
                See the wonders of the world up close and personal. Experience tranquility and serenity like never before.
              </Card.Text>
              <Button variant="primary" className="custom-button">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cardimg2} />
            <Card.Body>
              <Card.Title>Cuisine Delights</Card.Title>
              <Card.Text>
                Indulge in a culinary journey with our mouthwatering dishes from around the world.
                Experience flavors that will tantalize your taste buds and leave you craving for more.
              </Card.Text>
              <Button variant="primary" className="custom-button">Discover</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cardimg3} />
            <Card.Body>
              <Card.Title>Adventure Awaits</Card.Title>
              <Card.Text>
                Embark on thrilling adventures and create unforgettable memories.
                Take the road less traveled and experience adrenaline-pumping activities that will leave you breathless.
              </Card.Text>
              <Button variant="primary" className="custom-button">Start Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row className="g-6">
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cardimg4} />
            <Card.Body>
              <Card.Title>Home Decor</Card.Title>
              <Card.Text>
                Elevate your living space with our stylish home decor collection.
                Discover unique pieces that will transform your house into a home.
              </Card.Text>
              <Button variant="primary" className="custom-button">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cardimg5} />
            <Card.Body>
              <Card.Title>Fashion Trends</Card.Title>
              <Card.Text>
                Stay ahead of the fashion curve with our latest trends and styles.
                Express yourself through your wardrobe and make a statement wherever you go.
              </Card.Text>
              <Button variant="primary" className="custom-button">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cardimg6} />
            <Card.Body>
              <Card.Title>Health & Wellness</Card.Title>
              <Card.Text>
                Prioritize your well-being with our range of health and wellness products.
                Nourish your body, mind, and soul with natural remedies and self-care essentials.
              </Card.Text>
              <Button variant="primary" className="custom-button">Discover</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <h3 className="my-4 text-center">Latest News</h3>

<br>
</br>
      <Row xs={1} md={3} className="g-4">
        <Col> <Card className="h-100">
            <Card.Img variant="top" src={cardimg7} />
            <Card.Body>
              <Card.Title>Health & Wellness</Card.Title>
              <Card.Text>
                Prioritize your well-being with our range of health and wellness products.
                Nourish your body, mind, and soul with natural remedies and self-care essentials.
              </Card.Text>
              <Button variant="primary" className="custom-button">Discover</Button>
            </Card.Body>
          </Card></Col>
          <br></br>
        <Col> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardimg8} />
            <Card.Body>
              <Card.Title>Hestorical Places</Card.Title>
              <Card.Text>
                Prioritize your well-being with our range of health and wellness products.
                Nourish your body, mind, and soul with natural remedies and self-care essentials.
              </Card.Text>
              <Button variant="primary" className="custom-button">Discover</Button>
            </Card.Body>
          </Card></Col>
          <Col className="g-3">
      <Stack gap={3} className="g-3">
        <div className="d-flex align-items-center justify-content-center fw-bold p-2 rounded bg-dark text-white">
          <i className="fw-bold" /> Social Media
        </div>
        <div className="d-flex align-items-center justify-content-center p-2 rounded bg-primary text-white">
          <i className="fa fa-facebook" /> Facebook
        </div>
        <div className="d-flex align-items-center justify-content-center p-2 rounded bg-info text-white">
          <i className="fa fa-twitter" /> Twitter
        </div>
        <div className="d-flex align-items-center justify-content-center p-3 rounded bg-danger text-white">
          <i className="fa fa-instagram" /> Instagram
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-3 rounded bg-light">
          <Row className="mb-3">
            <Form.Group as={Col} md="9" controlId="validationCustom01">
              <Form.Label className="fw-bold text-center">News Letter</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Email"
                defaultValue="Enter Email"
              />
              <Button className="d-flex align-items-center justify-content-center w-100 mt-3" type="submit">Submit form</Button>
            </Form.Group>
          </Row>
        </Form>
      </Stack>
    </Col>
      </Row>
      <footer className="bg-dark text-light py-4 mt-4">

      <div className="container">
        <Row>
          <Col>
            <h5>Get In Touch</h5>
            <Stack gap={3}>
    
      <div className="d-flex align-items-center justify-content-center p-2 rounded" style={{ backgroundColor: '#3b5998', color: 'white', fontSize: '1rem' }}>
        <i className="fa fa-facebook" /> Facebook
      </div>
      <div className="d-flex align-items-center justify-content-center p-2 rounded" style={{ backgroundColor: '#1da1f2', color: 'white', fontSize: '1rem' }}>
        <i className="fa fa-twitter" /> Twitter
      </div>
      <div className="d-flex align-items-center justify-content-center p-3 rounded" style={{ backgroundColor: '#e4405f', color: 'white', fontSize: '1rem' }}>
        <i className="fa fa-instagram" /> Instagram
      </div>
    </Stack>
          </Col>
          <Col>
            <h5>Popular News</h5>
            <div class="mb-3">
                    <div class="mb-2">
                        <li class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" style={{color:'yellow'}} href="">Business</li>
<p >Jan 01, 2045</p>  
<p>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</p> 
                 </div>
                </div>
                <div class="mb-3">
                    <div class="mb-2">
                        <li class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" style={{color:'yellow'}} href="">Business</li>
<p >Jan 01, 2045</p>  
<p>Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</p> 
                 </div>
                </div>
          </Col>
          <Col>
            <h5>Contact</h5>
            <p>123 Street, New York, USA</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
        </Row>
      </div>
    </footer>
    </Container>
    
  );
}

export default AutoLayoutSizingExample;
