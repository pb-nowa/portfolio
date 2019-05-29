import React from 'react';
import Project from './projects';

class Root extends React.Component {

    render(){
        return(
            <div className="main">
                <div className="header">PRESTON NOWAKOWSKI</div>
                <ul className="tabs-container">
                    <li className="project-tab">Project1</li>
                    <li className="project-tab">Project2</li>
                    <li className="project-tab">Project3</li>
                </ul>
                <Project/>
            </div>
        )
    }

}

export default Root;