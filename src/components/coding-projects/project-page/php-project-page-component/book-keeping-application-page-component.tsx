import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import AcctAppLandingPage from '../../../../assets/php/accounting-application/accounting-application.jpg';
import EnterJournalEntry from '../../../../assets/php/accounting-application/enter-journal-entry.jpg';
import ConnectPHP from '../../../../assets/php/accounting-application/connect.jpg';
import CreateDBSCript1 from '../../../../assets/php/accounting-application/create-db-script.jpg';
import CreateDBSCript2 from '../../../../assets/php/accounting-application/create-db-script2.jpg';
import CreateDBSCript3 from '../../../../assets/php/accounting-application/create-db-script3.jpg';
import CreateDBSCript4 from '../../../../assets/php/accounting-application/create-db-script4.jpg';
import InsetEntryScript from '../../../../assets/php/accounting-application/insert-entry.jpg';
import { Helmet } from 'react-helmet';

export class BookKeepingApplicationPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>General Ledger Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-php-projects-background">
                    <h1 id="coding-projects-title">Book Keeping Application</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container2">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                Book Keeping Application designed to mirror an accounting system. This application serves to keep track
                                of transactions, such as amount, transaction type, and date of transaction. This was built on Bitnami server
                                and uses the MySQL database.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                The user will navigate to the landing page and have access to either, insert journal entries, view general ledger data,
                                and view user data.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={AcctAppLandingPage} />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                When the navigates to this page, the user will have to enter an entry ID number, user ID number, 
                                account ID number, description, debit amount, and a credit amount. This is to simulate an accounting  
                                software system.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={EnterJournalEntry} />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                Script used be able to connect PHP application with the MySQL database.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={ConnectPHP} />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                               Script used to create database in MySQL. There are three key tables that are part  
                               of the application such as user, account, and division. Insert statements used to populate the 
                               tables with information as well as identifying primary/foreign keys.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={CreateDBSCript1} />
                            </Col>
                            <Col md={6}>
                                <img src={CreateDBSCript2} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={CreateDBSCript3} />
                            </Col>
                            <Col md={6}>
                                <img src={CreateDBSCript4} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                Code snippet using POST request in order to add a new journal journal entry.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={InsetEntryScript} />
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