import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class ResumeButtonComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button variant="secondary" size="lg" block id="white-button">
                    <Link to="/resume" id="white-button">
                        Resume
                    </Link>
                </Button>
            </div>
        )
    }
}