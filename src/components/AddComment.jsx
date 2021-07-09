import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'


export default class AddComment extends Component {


    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.imdbid
        }
    }

    sendComment = async (e) => {
        e.preventDefault()
        try {

            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjU3NDcwOTEsImV4cCI6MTYyNjk1NjY5MX0.G4kyEjCqqI1Abl2tR30awLtw-cJUHgojAJKckF9Qq34"
                }

            })
            console.log(response);
            if(response.ok){
                alert('Commented!')
            } else {
                alert('Something went wrong')
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Comment"
                            value={this.state.comment.comment}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    comment: e.target.value
                                }
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rate</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.comment.rate}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    rate: e.target.value
                                }
                            })}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
