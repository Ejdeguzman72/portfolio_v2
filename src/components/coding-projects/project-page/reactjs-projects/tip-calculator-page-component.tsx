import React from 'react';
import Helmet from 'react-helmet';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import TipCalculator from '../../../../assets/reactjs/tip-calculator.jpg';

export class TipCalculatorPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Tip Calculator Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-reactjs-projects-background">
                    <h1 id="coding-projects-title">Tip Calculator Applications</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                The Tip Calculator application allows the user to calculate the tip and total amount for the bill.
                                When using the application, the user enters the amount for the bill, the satisfaction level for the service,
                                and options for the percent in which to tip. 
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
                                <img src={TipCalculator} />
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