import React, { Component } from 'react'
import { Nav,Navbar} from 'react-bootstrap'
import netcon1 from '../netcon1.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {ImImages} from 'react-icons/im'

export default class TopNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:'black'}}>
            <Navbar.Brand href="#icon"> <img
        src={netcon1}
        width="80"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">TV Shows</Nav.Link>
                <Nav.Link href="#pricing">Movies</Nav.Link>
                <Nav.Link href="#pricing">Recently Added</Nav.Link>
                <Nav.Link href="#pricing">My List</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets"><AiOutlineSearch/></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Kids
                </Nav.Link>
                <Nav.Link href="#notifications"><IoMdNotificationsOutline/></Nav.Link>
                <Nav.Link href="#profile"><ImImages/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

