import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import AddModal from './AddModal'

export default class SingleMovie extends Component {

    state = {
        modalShow: false
    }

    render() {
        return (

            <>
                <Card
                    onClick={() => this.setState({ modalShow: true })}

                >
                    <Card.Img variant="top" style={{ height: '240px' }} src={this.props.Poster} />
                    <Card.Body className='p-1'>
                        <Card.Title></Card.Title>
                    </Card.Body>
                </Card>
                <AddModal
                    title={this.props.Title}
                    imdbRating = {this.props.imdbRating}
                    Poster={this.props.Poster}
                    imdbID={this.props.imdbID}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                />
            </>

        )
    }
}
