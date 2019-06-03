import React from 'react';
import { Link } from 'react-router-dom';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            left: false,
            middle: false,
            right: false,
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleHover(tab){
        this.setState(() => ({ [tab]: true }));
    }

    handleLeave(tab){
        this.setState(() => ({ [tab]: false }));
    }

    render(){
        const { open } = this.props;
        const { left, middle, right } = this.state;
        return(
            <ul className={middle || open === "alldays" ? "tabs-container hovered-second" : "tabs-container"}>
                <Link to="/projects/pokenalysis" 
                    id="first" 
                    className={left || open === "pokenalysis" ? "project-tab hovered" : "project-tab"}
                    onMouseEnter={() => this.handleHover("left")}
                    onMouseLeave={() => this.handleLeave("left")} 
                    ><h2 className={left ? "underline" : ""}>Pokenalysis</h2>
                </Link>
                <Link to="/projects/alldays" 
                    id="second" 
                    className="project-tab" 
                    onMouseEnter={() => this.handleHover("middle")} 
                    onMouseLeave={() => this.handleLeave("middle")} 
                    ><h2 className={middle ? "underline" : ""}>Alldays</h2>
                </Link>
                <Link to="/projects/granular-synth" 
                    id="third" 
                    className={right || open === "granular-synth" ? "project-tab hovered" : "project-tab"}
                    onMouseEnter={() => this.handleHover("right")}
                    onMouseLeave={() => this.handleLeave("right")} 
                    ><h2 className={right ? "underline" : ""}>Granular Synth</h2>
                </Link>
            </ul>
        )
    }
};

export default Tabs;
