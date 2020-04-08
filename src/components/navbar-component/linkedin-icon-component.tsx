import React from 'react';
import logo from '../../assets/linkedin/icons8-linkedin-24.png';
import { Link } from 'react-router-dom';

export class LinkedInIconComponent extends React.Component {
    render() {
        return (
            <div>
                <i>
                    {/* <Link to="https://www.linkedin.com/in/edgarjdeguzman"> */}
                        <img src={logo}  />
                    {/* </Link> */}
                </i>
            </div>
        )
    }
}