import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Pokedex from '../../../../assets/reactjs/pokedex.jpg';
import { NavBarComponent } from '../../../navbar-component/navbar-component';

export class PokedexPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Pokedex Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-reactjs-projects-background">
                    <h1 id="coding-projects-title">Pokedex Application</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                    <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                Pokedex Application mimics a pokedex of the first 151 Pokemon. This applications is connected to the Pokemon API.
                                This allows us to have access to the information that the API possesses. The API contains sprite, pokemon type, name, 
                                and ID number. 
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <img src={Pokedex} />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}