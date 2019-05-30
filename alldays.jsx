import React from 'react';
import Tabs from './tabs_container';

class Alldays extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <>
                <Tabs />
                <div className="display-container alldays">
                    <div className="project-about">
                        <div className="about-top">
                            <div className="about-top-header">
                                <h1>ALLDAYS</h1>
                                <h2>-</h2>
                                <a href="https://github.com/pb-nowa/All-Days"><h3>Github</h3></a>
                                <a href="http://alldays.herokuapp.com/#/"><h3>Live</h3></a>
                            </div>
                            <p>Alldays is an online shoe store modelled after Allbirds.com. It is built on a Rails/PostgreSQL backend with a React/Redux frontend.</p>
                            <a className="explore" href="http://alldays.herokuapp.com/#/">Explore</a>
                        </div>
                        <ul className="technologies">
                            <img className="tech-icon rails" src="images/rails.png" alt="rails" />
                            <img className="tech-icon postgres" src="images/postgres.png" alt="postgres" />
                            <img className="tech-icon react" src="images/react.png" alt="react" />
                            <img className="tech-icon" src="images/redux.png" alt="redux" />
                        </ul>
                    </div>
                    <div className="project-image-container alldays-container">
                        <img className="project-image alldays-img" src="images/alldays_demo.gif" alt="project 1" />
                    </div>
                </div>
            </>
        );
    }
}


export default Alldays;