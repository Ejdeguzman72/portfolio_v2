import React from 'react';
import { render } from '@testing-library/react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import LandingPage from '../../../../assets/springboot-react-projects/landing-page.png';
import GetAllContacts from '../../../../assets/springboot-react-projects/get-all-contacts.png';
import GetContactById from '../../../../assets/springboot-react-projects/get-contact-by-id.png';
import AddContact from '../../../../assets/springboot-react-projects/create-contact.png';
import UpdateContact from '../../../../assets/springboot-react-projects/update-contact.png';
import DeleteContact from '../../../../assets/springboot-react-projects/delete-contact.png';
import GetAllTransactions from '../../../../assets/springboot-react-projects/get-all-transaction-information.png';
import GetTransactionInfoById from '../../../../assets/springboot-react-projects/get-transaction-by-id.png';
import AddTransaction from '../../../../assets/springboot-react-projects/enter-new-transaction.png';
import UpdateTransaction from '../../../../assets/springboot-react-projects/update-transaction.png';
import GetAllCardInfo from '../../../../assets/springboot-react-projects/get-all-card-info.png';
import GetCardById from '../../../../assets/springboot-react-projects/get-card-by-id.png';
import AddCardInfo from '../../../../assets/springboot-react-projects/add-card-info.png';
import UpdateCardInfo from '../../../../assets/springboot-react-projects/update-card.png';
import Deletecard from '../../../../assets/springboot-react-projects/delete-card.png';
import GetAllBankInfo from '../../../../assets/springboot-react-projects/get-all-bank-info.png';
import GetBankById from '../../../../assets/springboot-react-projects/get-bank-by-id.png';
import AddBankInfo from '../../../../assets/springboot-react-projects/add-bank-info.png';
import UpdateBankInfo from '../../../../assets/springboot-react-projects/update-bank.png';
import DeleteBankInfo from '../../../../assets/springboot-react-projects/delete-bank-info.png';
import GetAllCarInfo from '../../../../assets/springboot-react-projects/get-a-cars.png';
import GetCarById from '../../../../assets/springboot-react-projects/get-car-by-id.png';
import AddCarInfo from '../../../../assets/springboot-react-projects/add-car.png';
import UpdateCarInfo from '../../../../assets/springboot-react-projects/update-car.png';
import DeleteCarInfo from '../../../../assets/springboot-react-projects/delete-car-info.png';
import GetAllCarRecords from '../../../../assets/springboot-react-projects/get-all-car-records.png';
import GetCarRecordById from '../../../../assets/springboot-react-projects/get-car-record-by-id.png';
import AddCarRecord from '../../../../assets/springboot-react-projects/add-car-record.png';
import UpdateCarRecord from '../../../../assets/springboot-react-projects/update-car-record.png';
import DeleteCarRecord from '../../../../assets/springboot-react-projects/delete-car-record.png';
import Helmet from 'react-helmet';

export class DSAPageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>DeGuzman Server Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-dsa-project-background">
                    <h1 id="coding-projects-title">DSA Project (DeGuzmanServerApplication)</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container1">
                        <Row>
                            <Col md={3}>

                            </Col>
                            <Col md={6} id="column-text-color">
                                <p>
                                    DSA project is comprised of Java, Springboot framework, React.js and PostgeSQl.This is a REST API
                                    that stores information pertaining to contact , automotive, financial, and medical information. Each user has the access
                                    to GET, POST, UPDATE, and DELETE.
                                </p>
                            </Col>
                            <Col md={3}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={LandingPage} />
                            </Col>
                            <Col md={6}>

                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12} id="column-text-color">
                                <p>
                                    This section covers the project that focuses on storing Contact information. For Contact information,
                                    the user is able to retrieve all infomration, retrieve information by ID number, add new contact information,
                                    update contact information, and lastly delete contact information.
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={GetAllContacts} />
                            </Col>
                            <Col md={6}>
                                <img src={GetContactById} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={UpdateContact} />
                            </Col>
                            <Col md={6}>
                                <img src={AddContact} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={DeleteContact} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12} id="column-text-color">
                                <p>
                                    This section covers the project that focuses on storing transaction information. The user is able to
                                    get all transaction information. get transaction information by id number, add a transaction,  update
                                    transaction information, and delete transaction information
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={GetAllTransactions} />
                            </Col>
                            <Col md={6}>
                                <img src={GetTransactionInfoById} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={AddTransaction} />
                            </Col>
                            <Col md={6}>
                                <img src={UpdateTransaction} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12} id="column-text-color">
                                <p>
                                    This section covers the project that focuses on storing card information.
                                    Infomration that is listed are name on card, number, security code, and
                                    expiration date, etc.
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={GetAllCardInfo} />
                            </Col>
                            <Col md={6}>
                                <img src={GetCardById} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={AddCardInfo} />
                            </Col>
                            <Col md={6}>
                                <img src={UpdateCardInfo} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={Deletecard} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12} id="column-text-color">
                                <p>
                                    This section covers the project that focuses on storing bank information. The user is able
                                    to get all bank information, get bank infomration by ID No., add bank information, update bank information,
                                    and delete bank information.
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={GetAllBankInfo} />
                            </Col>
                            <Col md={6}>
                                <img src={GetBankById} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={AddBankInfo} />
                            </Col>
                            <Col md={6}>
                                <img src={UpdateBankInfo} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={DeleteBankInfo} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12} id="column-text-color">
                                <p>
                                    This section covers the project that focuses on storing car information. The user is able
                                    to get all car information, get car infomration by ID No., add car information, update car information,
                                    and delete car information.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <img src={GetAllCarInfo} />
                            </Col>
                            <Col md={6}>
                                <img src={GetCarById} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={AddCarInfo} />
                            </Col>
                            <Col md={6}>
                                <img src={UpdateCarInfo} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={DeleteCarInfo} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12} id="column-text-color">
                                <p>
                                    This section covers the project that focuses on storing car record information. The user is able
                                    to get all car record information, get car record infomration by ID No., add car record information, update car record information,
                                    and delete car record information.
                                </p>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={GetAllCarRecords} />
                            </Col>
                            <Col md={6}>
                                <img src={GetCarRecordById} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={AddCarRecord} />
                            </Col>
                            <Col md={6}>
                                <img src={UpdateCarRecord} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={6}>
                                <img src={DeleteCarRecord} />
                            </Col>
                        </Row>
                    </Container>

                    <br></br>
                </div>
            </div>
        )
    }
}