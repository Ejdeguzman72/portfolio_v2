import React from 'react';
import { render } from '@testing-library/react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import LoginPic from '../../../../assets/typescript-react-projects/login.jpg';
import GetAllUsersPic from '../../../../assets/typescript-react-projects//get-all-users.jpg';
import GetUserInformationByUserIdPic from '../../../../assets/typescript-react-projects/get-user-information-by-userid.jpg';
import GetReimbursementByAuthorPic from '../../../../assets/typescript-react-projects/get-reimbursement-by-author.jpg';
import GetReimbursementByStatusPic from '../../../../assets/typescript-react-projects/get-reimbursement-by-status.jpg';
import SubmitReimbursementPic from '../../../../assets/typescript-react-projects/submit-a-reimbursement.jpg';
import UpdateReimbursementPic from '../../../../assets/typescript-react-projects/update-reimbursement.jpg';
import { Helmet } from 'react-helmet';

export class ERSPageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Expense Reimbursement System</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-ers-project-background">
                    <h1 id="coding-projects-title">Expense Reimbursement System</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container2">
                        <Row>
                            <Col md={1} sm={16}>
                            </Col>
                            <Col md={10}>
                                <img src={LoginPic} height="450" width="650" />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>User authentication uses JSON Web Tokens for logging in users. Once the token is passed, it allows the user to have access
                                throughout the application. This was created by using the React-Bootstrap framework to create a login form.
                                </p>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={GetAllUsersPic} height="450" width="650" />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>Component returns all users that are listed in the database. This component was made through the Bootstrap framework. All users will
                                be shown once it is navigated to this page.
                                </p>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={GetReimbursementByAuthorPic} height="450" width="650" />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>Component returns all reimbursements based on author. Author is considered to be another user with privileges to create reimbursements.
                                this component was made with Bootstrap to make it more responsive. Input must be value or it will not be able to return an output.
                                Once the submit button is pressed, an alert box will appear in order to indicate that the GET request has completed.
                                </p>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={GetUserInformationByUserIdPic} height="450" width="650" />
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>Component returns user information based on the User ID No. that was passed. This component was created using the Bootstrap framework.
                                This page is a responsive user interface. If the ID number is valid, an alert box will appear indicating the ID number that was entered and
                                return the corresponding information on the table.  However, if the ID number if not valid, it will  not return any record.
                                </p>
                            </Col>
                            <Col md={2}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={SubmitReimbursementPic} height="450" width="650" />
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <p>Component has user enter corresponding fields in order to submit a new reimbursement. This component was created with the Bootstrap framework
                                in order to be more responsive. The required fileds shown are Author ID No., amount,date submitted, date resolved, transaction description, resolver, status ID No., and type ID No.
                                All of these fields are required to be filled out before adding the reimbursement information.
                                </p>
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10}>
                                <img src={UpdateReimbursementPic} height="450" width="650" />
                            </Col>
                            <Col md={1}>
                                
                            </Col>
                        </Row>
                        <Row>
                        <Col md={1}>
                                
                                </Col>
                            <Col md={10} id="column-text-color">
                                <p>Component allows user to update a reimbursement based on the Reimbursement ID No. that was passed. This component was made by using the Bootstrap framework in order to be more
                                responsive. The component requires user to enter the ID number of the reimbursement the user is trying to update. Once the ID number is entered and appears to be valid,
                                then the reimbursement information is updated.
                                </p>
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