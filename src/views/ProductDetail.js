import React, { useState } from 'react'
import { Col, Container, Image, Row, Jumbotron, ButtonGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { categories } from '../helpers';
import { Truck } from 'react-bootstrap-icons';

export default function ProductDetail() {
  const { category, id } = useParams();
  const categoryProducts = categories[category];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('CH');
  const { products } = categoryProducts;
  const product = products.find(p => p.id === id);
  const { name, image, cost, colors } = product || {};
  const { images } = product ? colors[0] : [];
  const photos = product && images ? images.map((photo, index) => {
    const style = index === selectedImage ? { border: '2px solid #2dbed2', cursor: 'pointer' } : { cursor: 'pointer' };
    return (
      <Image
        src={photo}
        style={style}
        className='mb-4 w-100'
        roundedCircle
        onClick={() => { setSelectedImage(index) }}
      />
    );
  }) : '';
  return (
    <Container fluid className="mt-3 mb-3">
      <Row hidden={!product} >
        <Col md="1" sm="2" xs="2" className="pr-3">{photos}</Col>
        <Col md="6" sm="6" xs="6">
          <Image src={image} fluid style={{ width: '100%' }}/>
        </Col>
        <Col md="5" sm="4" xs="4">
          <Jumbotron className="w-100">
            <h5>{name}</h5>
            <h4 className="text-primary">$ {cost}</h4>
            <div className="mb-3 text-muted">
              <Truck className="mr-2" size={26}/> <span>Envío gratis a todo el país</span>
            </div>
            <ButtonGroup size="sm" className="mb-2">
              <Button
                variant={selectedSize === 'CH' ? 'primary' : 'light'}
                className="mr-2"
                onClick={() => { setSelectedSize('CH') }}>CH
              </Button>
              <Button
                variant={selectedSize === 'M' ? 'primary' : 'light'}
                className="mr-2"
                onClick={() => { setSelectedSize('M') }}>M
              </Button>
              <Button
                variant={selectedSize === 'G' ? 'primary' : 'light'}
                className="mr-2"
                onClick={() => { setSelectedSize('G') }}>G
              </Button>
            </ButtonGroup>
          </Jumbotron>
        </Col>
      </Row>
      <Row hidden={product}>
        <Col className="text-center p-4">El producto solicitado no existe.</Col>
      </Row>
    </Container>
  )
}
