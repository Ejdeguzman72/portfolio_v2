import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import CheckInImg from '../../../../assets/reactjs/checkin.jpg';
import { NavBarComponent } from '../../../navbar-component/navbar-component';

export class CheckInPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title id="coding-projects-title">Check In Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-reactjs-projects-background">
                    <h1 id="coding-projects-title">Check In Application</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                Check In Application lets the user enter their first and last name. Once user submits information
                                their name is rendered on the list. This will indicate that the user has checked in.
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
                                <img src={CheckInImg} />
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