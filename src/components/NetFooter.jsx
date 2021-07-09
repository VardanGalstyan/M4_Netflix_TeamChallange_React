import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {IoLogoYoutube} from 'react-icons/io'
import{Row,Col,Container} from 'react-bootstrap'

export default class NetFooter extends Component {
    render() {
        return (
            
             <Container style={{backgroundColor:'black'}}>
            <Row >
            <Nav.Link href="#fb"><AiFillFacebook/></Nav.Link>
            <Nav.Link href="#insta"><FaInstagramSquare/></Nav.Link>
            <Nav.Link href="#profile"><IoLogoTwitter/></Nav.Link> 
            <Nav.Link href="#profile"><IoLogoYoutube/></Nav.Link>
            </Row>

            <Row className='mt-0'>
            <Col lg={3} className='mt-2 d-flex' style={{flexDirection:'column',alignItems:'baseline'}}>
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li style={{border:'1px solid white',paddingBottom:'10px',marginTop:'10px'}}>Service Code</li>
            <li></li>
            </Col>

            <Col lg={3} className='mt-2 d-flex' style={{flexDirection:'column',alignItems:'baseline'}}>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
             </Col>

            <Col lg={3} className='mt-2 d-flex' style={{flexDirection:'column',alignItems:'baseline'}}>
            <li>Help centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            </Col>

            <Col lg={3} className='mt-2 d-flex' style={{flexDirection:'column',alignItems:'baseline'}}>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>corporate Information</li>
            </Col>
            </Row>

            </Container>
           
            )
            }
        }
            

        
