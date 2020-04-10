import React from 'react';
import { Helmet } from 'react-helmet';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import ToDoList from '../../../../assets/reactjs/todolist.jpg';

export class ToDoListPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>To Do List Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-reactjs-projects-background">
                    <h1 id="coding-projects-title">To Do List Application</h1>
                    <hr color="white"></hr>
                    <Container id="coding-projects-container">
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                The To Do List Application allows the user to make a schedule. When using the application, the user enters an item
                                and submits. Once the item  is submitted, the item is rendered as part of a list. In order to delete the item, the 
                                user must click on the item.
                            </Col>
                            <Col md={1}>

                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col md={1}>

                            </Col>
                            <Col md={10} id="column-text-color">
                                <img src={ToDoList} />
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