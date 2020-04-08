import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ERD from '../../../../assets/sql/erd.jpg';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import Helmet from 'react-helmet';

export class EntityRelationshipDiagramPageComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Entity-Relationship-Diagrams</title>
                </Helmet>
                <NavBarComponent/>
                <div id="hero-sql-projects-background">
                    <h2 id="coding-projects-title">Entity Relationship Diagram/Normalization</h2>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                        <Row>
                            <Col md={5}>
                                <img src={ERD} height="500" width="700"/>
                            </Col>
                            <Col md={7} id="column-text-color">
                                Entity Relationship Diagram for a SQL project. Tables specified in the diagram are 
                                Maintenance Detail, Family Member, Vehicle,  Maintenance Log, Vehicle Used, Location,
                                and Mechanic. Diagram shows the relationship between the tables and the contraints such as the 
                                primary and secondary key.
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}