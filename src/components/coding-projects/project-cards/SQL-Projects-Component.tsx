import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class SQLProjectsCardComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>SQL Projects</Card.Header>
                    <Card.Body>
                        <Card.Title>Structured Query Language (SQL) and Database Security</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                View Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    <Link to="entity-relationship-diagram">
                                        Entity-Relationship-Diagram
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <Link to="sql-queries">
                                        Queries
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <Link to="pl-sql-scripts">
                                        PL/SQL scripts (Stored Procedure, Cursors, Triggers)
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <Link to="/database-administration">
                                        Database Administration
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