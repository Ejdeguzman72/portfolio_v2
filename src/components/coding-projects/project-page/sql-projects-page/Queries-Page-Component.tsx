import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Col, Row } from 'react-bootstrap';
import queries1 from '../../../../assets/sql/queries1.jpg';
import queries2 from '../../../../assets/sql/queries2.jpg';
import queries3 from '../../../../assets/sql/queries3.jpg';
import queries4 from '../../../../assets/sql/queries4.jpg';
import queries5 from '../../../../assets/sql/queries5.jpg';
import queries6 from '../../../../assets/sql/queries6.jpg';
import queries7 from '../../../../assets/sql/queries7.jpg';
import { Helmet } from 'react-helmet';

export class QueriesPageComponent extends React.Component<any,  any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>SQL Queries</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-sql-projects-background">
                    <h1 id="coding-projects-title">SQL Queries</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container2">
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                This section covers work with queries ranging from simple to advanced work. This was doneusing SQL Server.
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                <img src={queries1} height="700"/>
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                <img src={queries2} />
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                <img  src={queries3}  />
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                <img src={queries4} />
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                <img src={queries5} />
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                                <img src={queries6} />
                            </Col>
                            <Col md={2}>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            
                            </Col>
                            <Col md={8} id="column-text-color">
                            <img src={queries7} />
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