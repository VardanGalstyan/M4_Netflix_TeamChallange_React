
import React, { Component } from 'react'
import { CarouselItem, Container, Row, Col, Carousel, Card } from 'react-bootstrap'

export default class MainCarousel extends Component {
    state = {
        films: []
    }

    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?s=starwars&apikey=72db6b6a")
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
                      <Row className="row-cols-sm-6 row">
                        {
                                this.state.films.map(film => <Col key={film.imdbID} className="col mb-4">
                                    <Card><img
                                        className="card-img-top"
                                        src={film.Poster}
                                        alt="First slide"
                                        />
                                    </Card>
                                </Col>)
                            }
                            </Row>
                    </CarouselItem>
                </Carousel>
            </Container>



        )
    }
}
