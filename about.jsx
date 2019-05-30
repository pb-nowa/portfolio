import React from 'react';

const about = () => {
    return(
        <>
        <div className="about-page-container">
            <div className="about-left">
                <div className="about-header-left">
                    <h1>ABOUT ME</h1>
                        <a href="https://github.com/pb-nowa"><h3>Github</h3></a>
                        <a href="https://www.linkedin.com/in/preston-nowakowski/"><h3>LinkedIn</h3></a>
                </div>
                <div className="body">
                    <img className="profile"src="https://media.licdn.com/dms/image/C5103AQGlAnULHP8wNg/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=_s9kbUl9VxFfr_ullYAXLXMvMLOizL0K0TEz0V18IIQ" alt="me"/>
                    <h2>SKILLS</h2>
                    <p>Ruby,  Ruby on Rails,  JavaScript,  React,  Redux,  jQuery,  AJAX, HTML,  CSS,  SCSS,  SQL, MongoDB, Express, git</p>
                    <h2>BACKGROUND</h2>
                    <p>here are some facts about me. this will be a page about how i am such a good coder and stuff. here are more words so that I cn fill up this page without habing to type any actual substance on the page. wow such a nice paragraph about me. yay!!!1 :D</p>
                </div>
            </div>
            <div className="about-right">
                <div className="about-header-right"></div>
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