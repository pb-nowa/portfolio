import React from 'react';

const about = () => {
    return(
        <>
        <div className="about-page-container">
            <div className="about-left">
                <div className="about-header-left">
                    <h1>ABOUT ME</h1>
                    <a href="https://github.com/pb-nowa">Github</a>
                    <a href="https://www.linkedin.com/in/preston-nowakowski/">LinkedIn</a>
                </div>

                <p>here are some facts about me. this will be a page about how i am such a good coder and stuff. here are more words so that I cn fill up this page without habing to type any actual substance on the page. wow such a nice paragraph about me. yay!!!1 :D</p>
            </div>
            <div className="about-right">
                <div className="about-header-right"></div>
                <img src="" alt="me"/>
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