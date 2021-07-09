import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import AddModal from './AddModal'

export default class SingleMovie extends Component {

    state = {
        modalShow: false
    }

    render() {
        return (

            <>
                <Card onClick={() => this.setState({ modalShow: true })} >
                    <Card.Img variant="top" style={{ height: '240px' }} src={this.props.poster} className="card-img-top" />
                    <Card.Body className='p-1'>
                        <Card.Title></Card.Title>
                    </Card.Body>
                </Card>
                <AddModal
                    title={this.props.title}
                    poster={this.props.poster}
                    imdbid={this.props.imdbid}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                />
            </>

        )
    }
}
