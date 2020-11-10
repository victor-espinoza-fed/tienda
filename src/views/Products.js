import React, { useState } from 'react'
import { Card, Container, Dropdown, Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { categories } from '../helpers';

export default function Products() {
  const { id: category } = useParams();
  const { products: prods } = categories[category];
  const [products, setProducts] = useState(prods);
  const onSort = (criteria) => {
    console.log(criteria, products);
    switch(criteria) {
      case 'priceAsc': {
        const tmp = [...products];
        const items = tmp.sort((a, b) => a.cost > b.cost ? 1 : -1);
        setProducts(items);
        break;
      }
      case 'priceDesc': {
        const tmp = [...products];
        const items = tmp.sort((a, b) => a.cost > b.cost ? -1 : 1);
        setProducts(items);
        break;
      }
      case 'name': {
        const tmp = [...products];
        const items = tmp.sort((a, b) => a.name > b.name ? 1 : -1);
        setProducts(items);
        break;
      }
      default: {
        setProducts(products);
      }
    }

  }
  const cards = products.map((product) => {
    const { id, name, cost, image } = product;
    const key = `product-${id}`;
    const href = `/product/${category}/${id}`;
    return (
      <Col md="4" lg="3" xl="2" xs="6" sm="6" key={key} className="mb-3">
        <Card className="w-100">
          <Link to={href}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>$ {cost}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container className="mt-3">
      <Row>
        <Col className="mb-3">
          <Dropdown variant="primary">
            <Dropdown.Toggle id="dropdown-basic">
              Ordenar por
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={onSort.bind(this, 'priceAsc')}>Menor precio</Dropdown.Item>
              <Dropdown.Item onClick={onSort.bind(this, 'priceDesc')}>Mayor precio</Dropdown.Item>
              <Dropdown.Item onClick={onSort.bind(this, 'name')}>Nombre</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>{cards}</Row>
    </Container>
  )
}
