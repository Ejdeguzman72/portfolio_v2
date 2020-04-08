import React from  'react';
import { Container, Row, Col } from 'react-bootstrap';
import StudentRegistration  from '../../../../assets/php/student-registration/student-registration-applicaiton.jpg';
import Snapshot1 from '../../../../assets/php/student-registration/snapshot1.jpg'
import Snapshot2 from '../../../../assets/php/student-registration/snapshot2.jpg'
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import Helmet from 'react-helmet';

export class RegistrationSystemPageComponent extends React.Component<any,any> {

    render() {
        return  (
            <div>
                <Helmet>
                    <title>Student Registration System Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-php-projects-background">
                    <h1 id="coding-projects-title">Registration System Application</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container3">
                        <Row>
                            <Col md={5}>
                                {/* <img src={} height="500" width="700"/> */}
                            </Col>
                            <Col md={7} id="column-text-color">
                                Sreenshots of PHP application that functions as a Student Registration System. 
                                The user fills out the required fields and registration day and time are returned .
                                the front end was built using HTML and CSS, while the backend was used with PHP. If any of the
                                fields are null, then the registration information will not be returned.
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={StudentRegistration} />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={Snapshot1} />
                            </Col>
                            <Col md={1}>
                            
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={Snapshot2} />
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