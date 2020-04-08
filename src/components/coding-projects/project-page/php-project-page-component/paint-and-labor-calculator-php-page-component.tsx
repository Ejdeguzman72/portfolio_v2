import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import program_1 from '../../../../assets/php/program1/program-1.jpg';
import code_snippet_prog1 from '../../../../assets/php/program1/code-snippet.jpg';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Helmet  } from 'react-helmet';

export class PaintAndLaborCalculatorPHPPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Paint and Labor Cost Calculator</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-php-projects-background">
                    <h1 id="coding-projects-title">Paint and Labor Calculator PHP Application</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                        <Row>
                            <Col id="column-text-color">
                                <p>
                                    This application was built using plain HTML, CSS, and PHP. The user inputs surface area to be painted and the 
                                    number of coats. Once these fields are filled out, labor and material cost are totaled together to give the 
                                    overall cost of the service.
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={program_1} />
                            </Col>
                            <Col  md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={code_snippet_prog1} />
                            </Col>
                            <Col  md={1}>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}