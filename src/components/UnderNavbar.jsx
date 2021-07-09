import React, { Component } from 'react'

import { Nav,Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap'
export default class UnderNavbar extends Component {
    render() {
        return (
            <Navbar expand="lg" style={{backgroundColor:'black'}}>
            <Navbar.Brand href="#home">TV Shows</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                
                <NavDropdown title="Genres" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
