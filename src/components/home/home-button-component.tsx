import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class  HomeButtonComponent extends React.Component<any,any> {
    constructor(props: any)  {
        super(props);
    }

    render() {
        return (
            <div>
                <Button variant="secondary" size="lg" id="white-button">
                    <Link to="/home" id="white-button">
                        Home 
                    </Link>
                </Button>
            </div>
        )
    }
}