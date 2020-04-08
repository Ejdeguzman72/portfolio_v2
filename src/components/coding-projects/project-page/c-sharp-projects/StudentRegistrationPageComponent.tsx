import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import project2_1 from '../../../../assets/c-sharp-pics/project2-1.jpg';
import project2_2  from '../../../../assets/c-sharp-pics/project2-2.jpg';
import project2_3 from '../../../../assets/c-sharp-pics/project2-3.jpg';
import Helmet from 'react-helmet';

export class StudentRegistrationPageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Student Registration System</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-C-sharp-projects-background">
                    <h2 id="coding-projects-title">Student Registration Application</h2>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container3">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>This project was built using Visual Studio IDE. The GUI was made made from Visual Basic and the backend was built
                                    using C#. The application is meant to simulate a student registration system. On the user interface, there are 
                                    several fields that need to be provided. These are first name, last name, and year. Once these fields are filled out,
                                    it will notify the student the date and time of registration.

                                </p>
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <img src={project2_1} />
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <img src={project2_2} />
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <img src={project2_3} />
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