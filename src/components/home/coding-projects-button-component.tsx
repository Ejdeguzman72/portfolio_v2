import React from 'react';
import { AboutMeComponent } from '../about-me/about-me-component';
import { AboutMeButtonComponent } from './about-me-button-component';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class CodingProjectsButtonComponent extends React.Component<any,any> {
    constructor(props: any)  {
        super(props);
    }

    render() {
        return (
            <div>
                <Button variant="secondary" size="lg" block id="white-button">
                    <Link to="/coding-projects" id="white-button">
                        Coding Projects
                    </Link>
                </Button>
            </div>
        )
    }
}