import React from 'react';
import { NavBarComponent } from '../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import { SpringBootReactProjectsCardComponent } from './project-cards/SpringBoot-React-Projects-Component';
import { CSharpProjectsCardComponent } from './project-cards/C#-Projects-Component';
import { SQLProjectsCardComponent } from './project-cards/SQL-Projects-Component';
import { PHPProjectsCardComponent } from './project-cards/PHP-Projects-Component';
import { TypescriptReactProjectsCardComponent } from './project-cards/Typescript-React-Projects-Component';
import { Helmet } from 'react-helmet';
import { ReactjsProjectsCardComponent } from './project-cards/reactjs-projects-component';

export class CodingProjectsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Coding Projects</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-coding-projects-background">
                    <h1 id="coding-projects-title">Coding  Projects</h1>
                    <hr color="white"></hr>
                    <Container>
                        <Row className="about-me-container-row1">
                            <Col md={5}  id="column-text-color">
                                <SpringBootReactProjectsCardComponent />
                                <br></br>
                            </Col>
                            <Col  md={7} id="column-text-color">
                                <div id="coding-projects-text">
                                    <p>This section covers REST API projects that were created using Java and React.js. 
                                    The Spring framwork was used in building the  application, particularly SpringBoot. PostgreSQL 
                                    was used as the database management system which stored the information that was being used in the 
                                    API. </p>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row className="about-me-container-row2">
                            <Col md={5}  id="column-text-color">
                                <TypescriptReactProjectsCardComponent />
                                <br></br>
                            </Col>
                            <Col  md={7} id="column-text-color">
                                <div id="coding-projects-text">
                                    <p>This section covers REST API projects that were created using TypeSCript and React.js. 
                                    This was built a node.js server meant to call GET, POST, UPDATE, and DELETE requests. The project 
                                    used PostgreSQL as the database management system in order to house its data.</p>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row className="about-me-container-row1">
                            <Col md={5}  id="column-text-color">
                                <ReactjsProjectsCardComponent />
                                <br></br>
                            </Col>
                            <Col  md={7} id="column-text-color">
                                <div id="coding-projects-text">
                                    <p>This section covers React.js projects. These are simple applications meant to solidify concepts of the React frameowkr.
                                        Node.js was also used to build the applications. React.js allows user to manage state and create dynamic and responsive 
                                        web applications. For more interaction, check out Fun React Projects located in the menu,  which is hosted on
                                        AWS s3 bucket. 
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        {/* <Row className="about-me-container-row1">
                            <Col md={5} id="column-text-color">
                                <CSharpProjectsCardComponent />
                                <br></br>
                            </Col>
                            <Col md={7} id="column-text-color">
                                <div id="coding-projects-text">
                                    <p>For this section, it covers projects made in Visual Studio C#. The GUI was made using Visual Basic with the 
                                    backend being built in C# for simple use applications.</p>
                                </div>
                            </Col>
                        </Row> */}
                        <br></br>
                        <br></br>
                        <Row className="about-me-container-row2">
                            <Col md={5} id="column-text-color">
                                <SQLProjectsCardComponent />
                                <br></br>
                            </Col>
                            <Col md={7} id="column-text-color">
                                <div id="coding-projects-text">
                                    <p>In this section, SQL is explored through Microsoft SQL Server. Data Definiition Language (DDL), Data Manipulation Langauge (DML) and Data Query Language (DQL)
                                    are explored. This section also covers database administration, such as assigning roles, security groups, 
                                    and creating users. PL/SQL is also covered in the form of triggers and stored procedures.</p>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Row className="about-me-container-row1">
                            <Col md={5} id="column-text-color">
                                <PHPProjectsCardComponent />
                                <br></br>
                            </Col>
                            <Col md={7} id="column-text-color">
                                <div id="coding-projects-text">
                                    <p>This section covers the knowledge of PHP (Hypertext Processor). PHP was used as a server
                                    side language in conjunction with HTML/CSS pages. These projects were built on Apache Bitnami Servers
                                    and a connection to MySQL database. </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}