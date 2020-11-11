import React, { useState } from 'react'
import { Card, Container, Dropdown, Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { categories } from '../helpers';
import './Products.scss';

export default function Products() {
  const { id: category } = useParams();
  const { products: prods } = categories[category];
  const [products, setProducts] = useState(prods);
  const onSort = (criteria) => {
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
    const { id, name, cost, image, colors = [] } = product;
    const key = `product-${id}`;
    const href = `/product/${category}/${id}`;
    const palette = colors.map(({ name }) => <span className={name} key={name}></span>);
    return (
      <Col md="4" lg="3" xl="2" xs="6" sm="6" key={key} className="mb-3">
        <Card className="w-100">
          <Link to={href}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Link to={href}>
              <Card.Title>{name}</Card.Title>
            </Link>
            <Card.Text className="colors">{palette}</Card.Text>
            <Card.Text>$ {cost}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md="2" className="mb-3">
          <Dropdown variant="primary" className="w-100">
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
