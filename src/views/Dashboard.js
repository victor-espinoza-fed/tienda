import React from 'react';
import {
  Carousel,
  Card,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { categories, base } from '../helpers';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Dashboard() {
  const cards = Object.entries(categories).map(([key, value]) => {
    const href = `/products/${key}`;
    return (
      <Col md="4" key={key}>
        <Card className="w-100">
          <Link to={href}>
            <Card.Img variant="top" src={value.image} height="400"/>
          </Link>
          <Card.Body>
            <Button href={href} variant="link">{key}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container fluid>
      <Row>
        <Carousel className="w-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              height="400"
              src={`${base}Banners%2Fbanner-1.jpg?alt=media&token=196fa540-0e5a-45e4-9552-a9dd5c23a1c3`}
              alt="Slogan"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height="400"
              src={`${base}Banners%2Fbanner-2.jpg?alt=media&token=b0363408-79e2-47ff-bc23-c67605d31635`}
              alt="Buen Fin"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height="400"
              src={`${base}Banners%2Fbanner-3.jpg?alt=media&token=2d77590a-fb52-453c-a3fd-076bd6a236e5`}
              alt="Descuento"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="categories" className="mt-4 mb-4">{cards}</Row>
    </Container>
  )
}
