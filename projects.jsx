import React from 'react';
import { Link } from 'react-router-dom';

    const project = () => {
        return(
            <>
            <ul className="tabs-container">
                <li id="first" className="project-tab">
                    <Link to="/projects/pokenalysis"><h2>Pokenalysis</h2></Link>
                </li>
                <li id="second" className="project-tab">
                    <Link to="/projects/alldays"><h2>Alldays</h2></Link>
                </li>
                <li id="third" className="project-tab">
                    <Link to="/projects/granular-synth"><h2>Granular Synth</h2></Link>
                </li>
            </ul>
            <div className="display-container">
                <div className="project-about">
                    <div className="about-top">
                        <h1>Project Title</h1>
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
                    <img className="project-image" src="https://raw.githubusercontent.com/pb-nowa/Virtual-Synthesizer/master/assets/screenshots/granular-synth-destructure.gif" alt="project 1"/>
                </div>
            </div>
            </>
        );
    }
    

export default project;