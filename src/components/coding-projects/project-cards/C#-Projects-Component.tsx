import React from  'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class CSharpProjectsCardComponent extends React.Component<any, any>  {

    render() {

        return (
            <div>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Visual Studio Projects</Card.Header>
                    <Card.Body>
                        <Card.Title>C# Projects</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                View Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/paint-flooring-cost-calculator">
                                        Paint and Flooring Price Calculator
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <Link to="/student-registration-application">
                                        Student Registration System
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <Link to="/package-delivery-system">
                                        Packing and Delivery Application
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