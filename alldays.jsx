import React from 'react';
import Tabs from './tabs_container';

class Alldays extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
        };
        this.setLoadState = this.setLoadState.bind(this);
    }

    setLoadState(){
        this.setState({
            loaded: true,
        });

    }

    render() {
        const { setLoadState } = this.state;
        return (
            <>
                <Tabs open="alldays"/>
                <div className="display-container alldays">
                    <div className="project-about">
                        <div className="about-top">
                            <div className="about-top-header">
                                <h1>ALLDAYS</h1>
                                <h2>-</h2>
                                <div className="links-container">
                                    <a href="https://github.com/pb-nowa/All-Days"><h3>Github</h3></a>
                                    <a href="http://alldays.herokuapp.com/#/"><h3>Live</h3></a>
                                </div>
                            </div>
                            <p>Alldays is an online shoe store modelled after Allbirds.com. It is built on a Rails/PostgreSQL backend with a React/Redux frontend.</p>
                            <h3 className="features-title">FEATURES</h3>
                            <ul className="features-list">
                                <li className="feature-item">Clean minimalist layout that keeps the focus on the product with a distraction free shopping experience</li>
                                <li className="feature-item">Communicative animations that control information flow and help any user in their shopping experience</li>
                                <li className="feature-item">Applied backend that will save customer information and keep track of their purchases and shopping cart items</li>
                            </ul>
                            <a className="explore" href="http://alldays.herokuapp.com/#/"><h2>Explore</h2></a>
                            <h3 className="features-title">DETAILS</h3>
                            <p>Be sure to checkout the <a className="hyperlink" href="http://alldays.herokuapp.com/#/">website</a> or 
                                visit the <a className="hyperlink" href="https://github.com/pb-nowa/All-Days">Github</a> for a more detailed look at Alldays.
                            </p>
                        </div>
                        <ul className="technologies">
                            <img className="tech-icon rails" src="images/rails.png" alt="rails" />
                            <img className="tech-icon postgres" src="images/postgres.png" alt="postgres" />
                            <img className="tech-icon webpack" src="images/webpack.png" alt="webpack" />
                            <img className="tech-icon react" src="images/react.png" alt="react" />
                            <img className="tech-icon" src="images/redux.png" alt="redux" />
                        </ul>
                    </div>
                    <div className="project-image-container alldays-container">
                        <img ref={ref => this.imageRef = ref}
                            onLoad={setLoadState}
                            className="project-image alldays-img" 
                            src="images/alldays_demo.gif" 
                            alt="alldays" 
                            />
                    </div>
                </div>
            </>
        );
    }
}


export default Alldays;