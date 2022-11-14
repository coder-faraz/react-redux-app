
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";      //to add CSS Styling of bootstrap components
import { useSelector } from "react-redux";



function NavigationBar() {

    const bal = useSelector(state => state.amount);

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand> React-Redux Bank </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/about"> About </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button as="input" type="submit" value={`Total Balance : ${bal}`} style={{marginRight:'8px'}} />
        </Navbar>
  );
}



export default NavigationBar;

