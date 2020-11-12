import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import "./style.scss";
import Dashboard from './views/Dashboard';
import ProductDetail from './views/ProductDetail';
import Products from './views/Products';
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap';
import { categories, base } from "./helpers";

export default function App() {
  const items = Object.entries(categories).map(([key]) => {
    const href = `/products/${key}`;
    return (<NavDropdown.Item key={key} href={href}>{key}</NavDropdown.Item>);
  });
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <Image
            style={{ maxHeight: '100%', maxWidth: '75px' }}
            src={`${base}compact-logo.png?alt=media&token=90d46768-e7e6-435e-967c-f5d8eecb3a95`}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {items}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Container fluid>
          <Switch>
            <Route path="/products/:id" children={<Products />} />
            <Route path="/product/:category/:id">
              <ProductDetail />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}
