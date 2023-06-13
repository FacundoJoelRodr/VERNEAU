import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
<>
      <Navbar bg="info  " variant="light">
        <Container>
          <Navbar.Brand href="#home">Verneau</Navbar.Brand>
          <Nav className="md-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#carrito"> <CartWidget/></Nav.Link>
          </Nav>
         
        </Container>
      </Navbar>

  </>
  );
}

export default NavBar;