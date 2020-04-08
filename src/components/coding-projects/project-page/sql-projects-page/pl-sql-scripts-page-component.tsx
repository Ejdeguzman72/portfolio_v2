import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import sp1 from '../../../../assets/sql/sp1.jpg';
import sp2 from '../../../../assets/sql/sp2.jpg';
import sp3 from '../../../../assets/sql/sp3.jpg';
import sp4 from '../../../../assets/sql/sp4.jpg';
import trigger1  from '../../../../assets/sql/trigger1-1.jpg';
import trigger1_1  from '../../../../assets/sql/trigger1-2.jpg';
import Helmet from 'react-helmet';

export class PLSQLScriptsPageComponent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>PL-SQL</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-sql-projects-background">
                    <h2 id="coding-projects-title">PL-SQL Scripts</h2>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container2">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>PL/SQL (Procedural Language Structured Query Language) is used to help integrate systematic programming tools to SQL. 
                                    In this section, it will showcase my experience with triggers and stored procedures. This was done through Microsoft SQL 
                                    Server. 
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
                                <h1>Stored Procedure</h1>
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={sp1} />
                            </Col>
                            <Col md={6} id="column-text-color">
                                <img src={sp2} />
                               
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                            <img src={sp3} />

                            </Col>
                            <Col md={6} id="column-text-color">
                                <img src={sp4} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <h1>Trigger</h1>
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                               <img src={trigger1_1}  />
                            </Col>
                            <Col md={6} id="column-text-color">
                               <img src={trigger1}  />
                            </Col>
                        </Row>
                        <br></br>
                        {/* <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <br></br> */}
                    </Container>
                </div>
            </div>
        )
    }
}