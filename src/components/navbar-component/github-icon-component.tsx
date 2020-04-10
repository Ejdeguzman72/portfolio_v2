import React from  'react';
import GithubIcon from '../../assets/GitHub-Mark/GitHub-Mark/PNG/GitHub-Mark-32px.png';
import { Link } from 'react-router-dom';

export class GitHubIconComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <i>
                    <a href="https://github.com/Ejdeguzman72">
                        <img src={GithubIcon}/>
                    </a>
                </i>
            </div>
        )
    }
}