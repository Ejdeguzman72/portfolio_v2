import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import project1 from '../../../../assets/c-sharp-pics/project1.jpg'
import project1_1 from '../../../../assets/c-sharp-pics/project1-2.jpg';
import Helmet from 'react-helmet';

export class PaintFlooringCostCalculatorPageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Paint Flooring Cost Calculator</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-C-sharp-projects-background">
                    <h2 id="coding-projects-title">Paint and Flooring Cost Calculator</h2>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container3">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>Applicaiton was built using Visual Studio,creating a simple GUi for user interaction and C#.  This is a 
                                    basic application where the user inputs the square feet that is desired to be painted and how many coats. Once this 
                                    is entered, a total that consists of labor and materials.

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
                                <img src={project1} />
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <img src={project1_1} />
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                    </Container>
                </div>
            </div>
        )
    }
}