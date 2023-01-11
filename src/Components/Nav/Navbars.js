import React from "react";
import "./Nav.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../Assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom"
import Search from "../Search/Search";
const Navbars = () => {

  return (
   
    <Navbar   expand="lg" >
    <div  className='container-fluid' >
        <Navbar.Brand href="#home"><img src={logo} title='logo'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/" className='nav-link active'>Home</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Link to="/aboutUs" className='nav-link page dropdown-item'>About Us</Link>
              <Link to="/ourTeam" className='nav-link page dropdown-item'>Our Team</Link>
              <Link to="/faqs" className='nav-link page dropdown-item'>FAQ'S</Link>
              <Link to="/booking" className='nav-link page dropdown-item'>Booking</Link>
              <Link to="/error" className='nav-link page dropdown-item'>Error 404</Link>
              <Link to="/login" className='nav-link page dropdown-item'>Login / Register</Link>
              
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Service</NavDropdown.Item>
              <NavDropdown.Item href="/servicesDetails">
                Service Details
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
            <Link to="/blogs" className='nav-link'>Blogs</Link>
            <Link to="/blogDetails" className='nav-link'>Blog Details</Link>
            
            </NavDropdown>
            <Link to="/contact" className='nav-link'>Contact Us</Link>
            <Link to="/search" className='nav-link'><FontAwesomeIcon icon={faSearch}  /></Link>
            <Nav.Link href="#home" className='teleIcon'><FontAwesomeIcon icon={faPhone} className='phone' />  (+01) 999 888 777</Nav.Link>
            <Nav.Link href="#home" className='btn'><button>Contact Us <span><FontAwesomeIcon icon={faChevronRight} className='arrow' /></span></button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      
    </Navbar>
  );
};

export default Navbars;
