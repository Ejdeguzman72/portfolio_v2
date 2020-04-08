import React from 'react';
import { NavBarComponent } from '../../../navbar-component/navbar-component';
import Helmet from 'react-helmet';

export class PackageDeliveryApplicationpageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Package Delivery Application</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-C-sharp-projects-background">
                    <h2 id="coding-projects-title">Package Delivery Application</h2>
                    <hr color="white"></hr>
                </div>
            </div>
        )
    }
}