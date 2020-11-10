import React from 'react';
import {
  Carousel,
  Card,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { categories } from '../helpers';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Dashboard() {
  const cards = Object.entries(categories).map(([key, value]) => {
    const href = `/products/${key}`;
    return (
      <Col md={{ span: 2 }} key={key}>
        <Card style={{ width: '100%' }}>
          <Link to={href}>
            <Card.Img variant="top" src={value.image} />
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
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1233x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1233x400"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1233x400"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="categories" className="mt-4 mb-4">{cards}</Row>
    </Container>
  )
}
