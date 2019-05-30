import React from 'react';
import { Link } from 'react-router-dom';

const tabs = (props) => {
    const { open } = props;
    return(
        <ul className="tabs-container">
            <li id="first" className="project-tab">
                <Link to="/projects/pokenalysis"><h2 className={open === "pokenalysis" ? "underline" : ""}>Pokenalysis</h2></Link>
            </li>
            <li id="second" className="project-tab">
                <Link to="/projects/alldays"><h2 className={open === "alldays" ? "underline" : ""}>Alldays</h2></Link>
            </li>
            <li id="third" className="project-tab">
                <Link to="/projects/granular-synth"><h2 className={open === "granular-synth" ? "underline" : ""}>Granular Synth</h2></Link>
            </li>
        </ul>
    )
};

export default tabs;
