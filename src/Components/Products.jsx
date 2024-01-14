import React, { useState, useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import { APIs } from "../const/APIs";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCTS)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-center my-4">
        <h1 className="text-bold">Discover New Arrivals</h1>
        <p>Recently added shirts</p>
      </div>

      <Container fluid className="my-4">
        <Row className="justify-content-center">
          {products.map((product) => (
            <Card className="my-2 mx-3" style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
