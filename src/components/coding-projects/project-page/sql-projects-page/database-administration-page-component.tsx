import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import Helmet from 'react-helmet';

export class DatabaseAdministrationPageComponent extends React.Component<any,any> {
    
    render() {
        return (
            <div>
                <Helmet>
                    <title>Database Administration</title>
                </Helmet>
                <NavBarComponent /> 
                <div id="hero-sql-projects-background">
                    <h2 id="coding-projects-title">Database Administration</h2>
                    <hr color="white"></hr>
                </div>
            </div>
        )
    }
}