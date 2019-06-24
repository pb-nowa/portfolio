
import React from 'react';
import Tabs from './tabs_container';

class Pokenalysis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        this.setLoadState = this.setLoadState.bind(this);
    }

    setLoadState() {
        this.setState({
            loaded: true,
        });

    }
    render() {
        const { setLoadState } = this.state;

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
                            <p>Pokenalysis is a online tool for all players of the Pokemon videogames. Optimize your team by crafting, analyzing, and sharing with a whole world of other Pokemon enthusists.
                            </p>
                            <h3 className="features-title">FEATURES</h3>
                            <ul className="features-list">
                                <li className="feature-item">Intuitively drag and drop a Pokemon into your team for detailed statistics on its strengths and weaknesses.</li>
                                <li className="feature-item">Quickly search by name or filter by type. </li>
                                <li className="feature-item">Share and like other teams to stay up to date with the current meta and top builds.</li>
                            </ul>
                            <h3 className="features-title">DETAILS</h3>
                            <p>Pokenalysis is a data driven app. Although there are other apps that accomplish similar goals, Pokenalysis
                                improves the team building experience. Drag-and-drop capabilities along with a simple delete button make it faster to build a team. 
                                Images and stats are lazy loaded, so that the filter and search functionality work faster than ever. (Also reducing API calls for a smoother experience)
                                The ability to like and share teams provides additional feedback in addition to the provided statistics. 
                                Statistics are calculated on the front-end to provide immediate results when new members are added. 
                                Be sure to checkout the <a className="hyperlink" href="http://pokenalysis.herokuapp.com/#/">website</a> or 
                                visit the <a className="hyperlink" href="https://github.com/bmzhu2/Pokenalysis">Github</a> for a more detailed look at Pokenalysis. 
                            </p>
                            <a className="explore" href="http://pokenalysis.herokuapp.com/#/"><h2>Explore</h2></a>
                        </div>
                        <ul className="technologies">
                            <img className="tech-icon" src="images/mongodb.png" alt="mongodb"/>
                            <img className="tech-icon react" src="images/react.png" alt="react"/>
                            <img className="tech-icon" src="images/redux.png" alt="redux"/>
                            <img className="tech-icon node" src="images/node.png" alt="nodejs"/>
                        </ul>
                    </div>
                    <div className="project-image-container pokenalysis-container">
                        <img ref={ref => this.imageRef = ref}
                            onLoad={setLoadState}
                            className="project-image pokenalysis-img" 
                            src="images/pokenalysis_demo2.gif"
                            alt="pokenalysis site" 
                            />
                    </div>
                </div>
            </>
        );
    }
}


export default Pokenalysis;