import React from 'react';
import Tabs from './tabs_container';

class Pokenalysis extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <>
                <Tabs />
                <div className="display-container">
                    <div className="project-about">
                        <div className="about-top">
                            <h1>POKENALYSIS</h1>
                            <p>This is a paragraph that is describing my project and how awesome it is. It will be some length and have a few bullet points. Here are a few more words in order to fill up some of this space. I need more words to add to this paragraph. Wow. what a grat project !!!!!! :D</p>
                            <a className="explore" href="">Explore</a>
                        </div>
                        <ul className="technologies">
                            <li>technology 1</li>
                            <li>technology 2</li>
                            <li>technology 3</li>
                        </ul>
                    </div>
                    <div className="project-image-container">
                        <img className="project-image" src="https://raw.githubusercontent.com/pb-nowa/Virtual-Synthesizer/master/assets/screenshots/granular-synth-destructure.gif" alt="project 1" />
                    </div>
                </div>
            </>
        );
    }
}


export default Pokenalysis;