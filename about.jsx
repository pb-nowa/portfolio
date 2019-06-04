import React from 'react';
import { Link } from 'react-router-dom';

const about = () => {
    return(
        <>
        <div className="about-page-container">
            <div className="about-left">
                <div className="about-header-left">
                    <h1>ABOUT ME</h1>
                        <a href="https://www.linkedin.com/in/preston-nowakowski/"><h3>LinkedIn</h3></a>
                        <a href="https://github.com/pb-nowa"><h3>Github</h3></a>
                </div>
                <div className="body">
                    <img className="profile"src="https://media.licdn.com/dms/image/C5103AQGlAnULHP8wNg/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=_s9kbUl9VxFfr_ullYAXLXMvMLOizL0K0TEz0V18IIQ" alt="me"/>
                    <h2>BACKGROUND</h2>
                    <p>Hi there! I'm Preston, a full-stack web developer. Programming has always been a passion of mine. Having grown-up in the San Francisco Bay Area, it has been hard to avoid the tech world. 
                        But instead of going into programming immediately, I spent some time working in the music and entertainment business.
                        In my previous career, I held a variety of jobs ranging from music tech for recording and studio sessions, to sheet music praparation and even professional whistling. 
                        You can checkout some of my music&nbsp;
                        <a className="hyperlink" href="https://soundcloud.com/pnowakowskimusic">here</a>.
                    </p>
                    <h2>My developer commandments</h2>
                    <ul className="list">
                        <li>1. There's no such thing as too much detail</li>
                        <li>2. Functionality is only as good as an app's usability</li>
                        <li>3. Eliminate distractions and repeat important information</li>
                        <li>4. Be creative within the limits of your audience</li>
                    </ul>
                    <br/>
                    <p>Feel free to take a look at some of my&nbsp;
                        <Link className="hyperlink" to="/projects/pokenalysis">projects</Link>.
                    </p>
                    
                </div>
            </div>
            <div className="about-right">
                <div className="about-header-right"></div>
                    <h2>TECHNOLOGIES</h2>
                    <div className="technologies-about">
                        <h3>LANGUAGES</h3>
                        <p>Ruby, JavaScript, SQL</p>
                        <h3>BACKEND</h3>
                        <p>Ruby on Rails, Express, PostgreSQL, MongoDB, Node </p>
                        <h3>FRONTEND</h3>
                        <p>React, Redux, jQuery, Webpack, AJAX, HTML, CSS, SCSS / Sass, git</p>
                    </div>
                <h2>Education</h2>
                <ul className="list">
                    <li>App Academy | Web Development Intensive</li>
                    <li>University of Southern California | M.M. Screen Scoring (Music Composition and Audio Technologies)</li>
                    <li>California State University, Northrdige | B.M. Media and Commercial Composition</li>
                </ul>
                <p>Checkout my full <a className="hyperlink" href="">resume</a></p>

            </div>
        </div>
        <div className="footer">
            <div className="info">
                <h3>(925)321-9577</h3>
                <h3>|</h3>
                    <a className="mail-hyperlink" href="mailto:pb.nowa@gmail.com"><h3>pb.nowa@gmail.com</h3></a>
            </div>
        </div>
        </>
    )
}

export default about;
