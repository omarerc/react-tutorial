import React, { Component } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SurfPocketMenuLogo from './SurfPocketMenuLogo.js';

class Menu extends Component {

  render() {
    return(
      <Navbar className='navbar navbar-expand-lg navbar-dark bg-dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="index"><SurfPocketMenuLogo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="index">Home</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="index">Settings Profile</NavDropdown.Item>
              <NavDropdown.Item href="index">
                Profile Privacy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="index">
                Load Social Media Content
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            {/*<Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>*/}
            <Button href='log-in.js' variant="outline-success">Log In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }

}

export default Menu;