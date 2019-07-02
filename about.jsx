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
                    <div className="profile-container">
                        <img className="profile"src="https://media.licdn.com/dms/image/C5103AQGlAnULHP8wNg/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=_s9kbUl9VxFfr_ullYAXLXMvMLOizL0K0TEz0V18IIQ" alt="me"/>
                        <p className="profile-summary">Hi there! I'm Preston, a full-stack web developer. Some of my specialties include, React, Redux, Ruby on Rails, and creative-problem-solving. I enjoy building unique visually-pleasing web apps that are enjoyable and simple to use. 
                            <br/>
                            <br/>
                            Checkout some of my&nbsp;
                            <Link className="hyperlink" to="/projects/pokenalysis">projects</Link>.
                        </p>
                        
                    </div>
                    <h2 className="space-above">WHAT I'M LOOKING FOR</h2>
                    <p>As a former employee of the entertainment industry, I have really enjoyed working in fast-paced collaborative environments. I hope to work somewhere where creativity is expected and communication is king. 
                    I am a lifelong learner and always looking to pick up new skills.</p>
                    <h2 className="space-above">ACHIEVEMENTS</h2>
                    <p>I am a graduate of App Academy, a top tier full-stack software development intensive, based in the heart of San Francisco. I am a fast learner, completing my undergraduate degree at California State University, Northridge in 3 years, and earning the Dean's Award for the College of Media, Arts, and Communications. I then received my Master's from the University of Southern California in its accelerated 1-year Screen Scoring (music technology and film) program, which is recognized as #1 in the world as part of the Thornton Conservatory and the School of Cinematic Arts.</p>
                    <br/>

                </div>
            </div>
            <div className="about-right">
                <div className="about-header-right"></div>
                <div className="body">
                    <h2>MY DEVELOPER COMMANDMENTS</h2>
                    <ul className="list">
                        <li>1. There's no such thing as too much detail</li>
                        <li>2. Functionality is only as good as an app's usability</li>
                        <li>3. Eliminate distractions and repeat important information</li>
                        <li>4. Be creative within the limits of your audience</li>
                    </ul>
                    <h2 className="space-above" >TECHNOLOGIES</h2>
                    <div className="technologies-about">
                        <li className="tech-list-container">
                            <h3>LANGUAGES:</h3>
                            <p>Ruby, JavaScript, SQL</p>
                        </li>
                        <li className="tech-list-container">
                            <h3>BACKEND:</h3>
                            <p>Ruby on Rails, Express, PostgreSQL, MongoDB, Node</p>
                        </li>
                        <li className="tech-list-container">
                            <h3>FRONTEND:</h3>
                            <p>React, Redux, jQuery, Webpack, AJAX, HTML, CSS, SCSS / Sass, git</p>
                        </li>
                    </div>
                <h2 className="space-above">EDUCATION</h2>
                <ul className="list">
                    <li>App Academy | Full Stack Web Development Intensive</li>
                    <li>University of Southern California | M.M. Screen Scoring (Music Composition and Audio Technologies)</li>
                    <li>California State University, Northrdige | B.M. Media and Commercial Composition</li>
                </ul>
                <p>Checkout my full <a className="hyperlink" href="/assets/RESUME - Preston Nowakowski.pdf">resume</a></p>
                </div>
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
