
import React, { Component } from 'react'
import { CarouselItem, Container, Row, Col, Carousel, Card } from 'react-bootstrap'
import SingleMovie from './SingleMovie'

export default class MainCarousel extends Component {
    state = {
        films: []
    }

    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?s=thrones&apikey=72db6b6a")
        let res = await response.json()
        console.log(res)
        this.setState({
            films: res.Search
        })
    }

    render() {
        return (
            
            <Container>
                <Carousel>
                    <CarouselItem>
                      <Row className="row-cols-sm-6 ">
                        {
                                this.state.films.map(film => <Col key={film.imdbID} className=" mb-4">
                                   <SingleMovie Poster={film.Poster}/> 
                                </Col>)
                            }
                            </Row>
                    </CarouselItem>
                </Carousel>
            </Container>



        )
    }
}
