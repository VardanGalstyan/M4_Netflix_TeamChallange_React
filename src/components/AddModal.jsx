import React, { Component } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import AddComment from './AddComment'
import CommentList from './CommentList'

export default class AddModal extends Component {

    state = {
        comments: [],
        isLoading: true,
        isError: false
    }


    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.imdbid, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjU3NDcwOTEsImV4cCI6MTYyNjk1NjY5MX0.G4kyEjCqqI1Abl2tR30awLtw-cJUHgojAJKckF9Qq34"
                }
            })
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false })


            } else {
                console.log('error');
                this.setState({ isLoading: false, isError: true })
            }


        } catch (error) {
            this.setState({ isError: true })

        }
    }



    render() {
        return (
            <Modal


                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className='text-center mt-4'>
                            <img src={this.props.poster} alt="" style={{ maxWidth: '350xp' }} />
                        </Col>
                        <Col>
                            <AddComment imdbid={this.props.imdbid} />
                        </Col>
                    </Row>
                    <Row className='d-inline'>
                        <CommentList className='mb-3' style={{ width: '100%' }} comments={this.state.comments} />
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}
