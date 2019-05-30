
import React from 'react';
import Tabs from './tabs_container';

class Pokenalysis extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <>
                <Tabs open="pokenalysis"/>
                <div className="display-container pokenalysis">
                    <div className="project-about">
                        <div className="about-top">
                            <div className="about-top-header">
                                <h1>POKENALYSIS</h1>
                                <h2>-</h2>
                                <a href="https://github.com/bmzhu2/Pokenalysis"><h3>Github</h3></a>
                                <a href="http://pokenalysis.herokuapp.com/#/"><h3>Live</h3></a>
                            </div>
                            <p>Pokenalysis is a online team builder that leverages the PokéAPI and allows users to create, analyze, save, and share teams of Pokemon.</p>
                            <a className="explore" href="http://pokenalysis.herokuapp.com/#/">Explore</a>
                        </div>
                        <ul className="technologies">
                            <img className="tech-icon" src="images/mongodb.png" alt="mongodb"/>
                            <img className="tech-icon react" src="images/react.png" alt="react"/>
                            <img className="tech-icon" src="images/redux.png" alt="redux"/>
                            <img className="tech-icon node" src="images/node.png" alt="nodejs"/>
                        </ul>
                    </div>
                    <div className="project-image-container pokenalysis-container">
                        <img className="project-image pokenalysis-img" src="images/pokenalysis_demo2.gif" alt="project 1" />
                    </div>
                </div>
            </>
        );
    }
}


export default Pokenalysis;