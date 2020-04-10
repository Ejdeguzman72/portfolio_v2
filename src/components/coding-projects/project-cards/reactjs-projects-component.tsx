import React from  'react';
import { Card,  Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class ReactjsProjectsCardComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Card bg="dark" text="white"style={{ width: '18rem' }}>
                    <Card.Header>Reactjs Projects</Card.Header>
                    <Card.Body>
                        <Card.Title>Node.js</Card.Title>
                        <Card.Text></Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                View Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/to-do-list">
                                        To-Do List
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/tip-calculator">
                                        Tip Calculator
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/pokedex">
                                        Pokedex
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/check-in">
                                        Check-In Component
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}