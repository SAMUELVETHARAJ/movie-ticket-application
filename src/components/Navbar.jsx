import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Input } from 'antd';

const { Search } = Input;

const NavigationBar = ({handleSearch}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='mt-0 mb-4'>
      <Navbar.Brand as={Link} to="/" style={{marginLeft: '20px'}}>Movie Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mx-5">
          <Nav.Link as={Link} to="/home">
            <i className="fas fa-home"></i> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/home" style={{marginLeft: '10px'}}>
            <i className="fas fa-home"></i> Aboutus
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" style={{marginLeft: '10px'}}>
            <i className="fas fa-shopping-cart"></i> View Cart
          </Nav.Link>
          <Search
        placeholder="Search for a movie..."
        onChange={handleSearch}
        style={{ padding:'6px', width: '400px' , marginLeft: '180px' }}
      />
          <Nav.Link as={Link} to="/" style={{marginLeft: '10px'}}>
            <i className="fas fa-user"></i> Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
