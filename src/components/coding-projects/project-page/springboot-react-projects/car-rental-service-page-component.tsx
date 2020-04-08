import React from  'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../../../../assets/car-rental-service/login.png';
import RegisterPic from '../../../../assets/car-rental-service/register.png';
import Helmet from 'react-helmet';

export class CarRentalServicePageComponent extends React.Component<any, any>  {
    constructor(props: any)  {
        super(props);
    }

    render()  {
        return (
            <div>
                <Helmet>
                    <title>Car Rental Service</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-car-rental-project-background">
                    <h1 id="coding-projects-title">Car Rental Service</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                        <Row>
                            <Col md={2}>

                            </Col>
                            <Col md={8} id="column-text-color">
                                <p>This section covers the Car Rental Service Project. This system is to keep track
                                    of car information and facilitating renting them for consumer use. This application
                                    was built using SpringBoot, React.js and Redux to help manage state more easily.
                                    User can login, check information, see cars available, rent, and finally checkout
                                    </p>
                            </Col>
                            <Col md={2}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={2}>

                            </Col>
                            <Col md={8}>
                                <img src={Login} />
                            </Col>
                            <Col md={2}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={2}>

                            </Col>
                            <Col md={8}>
                                <img src={RegisterPic} />
                            </Col>
                            <Col md={2}>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}