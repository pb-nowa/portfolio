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
                    <p>Hi there! I'm Preston, a full-stack web developer based in the San Francisco Bay Area. My specialties include, Ruby on Rails, React and Redux. I see web development as a conversation with the user, with each line of code, a website can communicate and direct the conversation. I also write film and commercial music.</p>
                    <h2>TECHNOLOGIES</h2>
                    <h3>LANGUAGES</h3>
                    <p>Ruby, JavaScript, SQL</p>
                    <h3>BACKEND</h3>
                    <p>Ruby on Rails, Express, PostgreSQL, MongoDB, Node </p>
                    <h3>FRONTEND</h3>
                    <p>React, Redux, jQuery, Webpack, AJAX, HTML, CSS, SCSS / Sass, git</p>
                    
                    <div className="buttons">
                        <Link className="explore" to="/projects/pokenalysis"><h4>Projects</h4></Link>
                        <a className="explore" href="">Resume</a>
                    </div>
                    
                </div>
            </div>
            <div className="about-right">
                <div className="about-header-right"></div>
                <h2>BACKGROUND</h2>
                <p>here are some facts about me. this will be a page about how i am such a good coder and stuff. here are more words so that I cn fill up this page without habing to type any actual substance on the page. wow such a nice paragraph about me. yay!!!1 :D</p>
            </div>
        </div>
        <div className="footer">
            <div className="info">
                <h3>(925)321-9577</h3>
                <h3>|</h3>
                <h3>pb.nowa@gmail.com</h3>
            </div>
        </div>
        </>
    )
}

export default about;
