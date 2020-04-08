import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class TypescriptReactProjectsCardComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Typescript /  React.js Projects</Card.Header>
                    <Card.Body>
                        <Card.Title>Node.js</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                View Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/ers-project">
                                        Expense Reimbursement  System
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