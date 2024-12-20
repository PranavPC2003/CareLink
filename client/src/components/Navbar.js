import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormsDropdown from './FormsDropdown'; // Import the FormsDropdown component

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">CareLink</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-flex align-items-center">
          <Nav.Link as={Link} to="/" className="text-white">
            Home
          </Nav.Link>

          <Dropdown className="nav-item">
            <Dropdown.Toggle variant="link" id="clinic-dropdown" className="nav-link text-white" style={{ paddingBottom: '26px' }}
            >
              Clinic
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-dark">
              <Dropdown.Item as={Link} to="/clinic/doctor">Doctor</Dropdown.Item>
              <Dropdown.Item as={Link} to="/patient-form">Patients</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="nav-item">
            <Dropdown.Toggle variant="link" id="hospitals-dropdown" className="nav-link text-white" style={{ paddingBottom: '26px' }}
            >
              Hospitals
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-dark">
              <Dropdown.Item as={Link} to="/hospitals/hospital-list">Hospital List</Dropdown.Item>
              <Dropdown.Item as={Link} to="/hospitals/book-appointment">Book an Appointment</Dropdown.Item>
              <Dropdown.Item as={Link} to="/maps">Maps</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        {/* 
          <FormsDropdown />  */}

        </Nav>
          
        {/* <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link as={Link} to="#feedback" className="text-white">
            Feedback
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
