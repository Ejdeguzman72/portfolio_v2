import React from  'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';

export class ResearchLouisvillePageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Research Louisville</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-php-projects-background">
                    <h2 id="coding-projects-title">Research Louisville</h2>
                    <hr color="white"></hr>
                    <Container >
                        <Row>
                            <Col md={5}>
                                {/* <img src={} height="500" width="700"/> */}
                            </Col>
                            <Col md={7} id="column-text-color">
                                Sreenshots of php application to house clinical information for the Division of Infectious Diseases.  PHP served as the 
                                foundation for backend. HTML and CSS were used for the frontend and MySQL was used as the database to house the infomration.
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}