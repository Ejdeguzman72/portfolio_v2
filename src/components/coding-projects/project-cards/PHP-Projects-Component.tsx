import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class PHPProjectsCardComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>PHP Projects</Card.Header>
                    <Card.Body>
                        <Card.Title>PHP/Apache</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                View Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="#/action-1">
                                    <Link to="research-louisville">
                                        Research Louisville
                                    </Link>
                                </Dropdown.Item> */}
                                <Dropdown.Item href="#/action-2">
                                    <Link to="registration-system">
                                        Registration System
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <Link to="/book-keeping-application">
                                        Bookkeeping Application
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    <Link to="/program1">
                                        Paint and Labor Calculator
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    <Link to="/student-application">
                                        Student Application
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