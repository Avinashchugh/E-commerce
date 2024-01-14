import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";


const ServicesSection = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="section-tile mt-5 mb-4">
        <h1 className="text-center py-3">Services</h1>
      </div>
      <Row className="justify-content-center">
        <Col lg={5} md={10} sm={12} className="mb-4 d-flex align-items-center">
          <Card className="bg-dark text-white shadow-lg text-center" style={{ height: "400px", padding: "20px" }}>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="mb-3">PEACE OF MIND</Card.Title>
              <Card.Text className="mb-4">
                A one-stop platform for all your fashion needs, hassle-free.
                Buy with peace of mind.
              </Card.Text>
              <Button variant="outline-primary" className="btn-white-blue mx-auto">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={5} md={10} sm={12} className="mb-4 d-flex align-items-center">
          <Card className="bg-dark text-white shadow-lg text-center" style={{ height: "400px", padding: "20px" }}>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="mb-3">BUY 2 GET 1 FREE</Card.Title>
              <Card.Text className="mb-4">
                End of season sale. Buy any 2 items of your choice and get 1
                free.
              </Card.Text>
              <Button variant="outline-primary" className="btn-white-blue mx-auto">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
       <div className='mt-3 text-center'>
  <h1 className="text-bold">Top Sellers</h1>
  <p>Browse our top-selling products</p>
</div>

      <Container fluid className='mb-5'>
        <Row>
          <Card style={{ width: "18rem", marginLeft: "8rem", border: "1px solid white" }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Gray Polo Shirt</Card.Title>
              <Card.Text>$49.00</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginLeft: "0.8rem", border: "1px solid white" }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Red Shirt</Card.Title>
              <Card.Text>$69.00</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginLeft: "0.8rem", border: "1px solid white" }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Polo White Shirt</Card.Title>
              <Card.Text>$29.00</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginLeft: "0.8rem", border: "1px solid white" }}>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Pink casual Shirt</Card.Title>
              <Card.Text>$39.00</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary" className='p-3'>SHOP NOW</Button>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
