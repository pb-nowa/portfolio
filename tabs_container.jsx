import React from 'react';
import { Link } from 'react-router-dom';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleHover(){
        this.setState({hovered: true});
    }

    handleLeave(){
        this.setState({hovered: false});
    }

    render(){
        const { open } = this.props;
        const { hovered } = this.state;
        return(
            <ul className={hovered ? "tabs-container hovered-second" : "tabs-container"}>
                <li id="first" className="project-tab">
                    <Link to="/projects/pokenalysis"><h2 className={open === "pokenalysis" ? "underline" : ""}>Pokenalysis</h2></Link>
                </li>
                <li id="second" className="project-tab" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave} >
                    <Link to="/projects/alldays"><h2 className={open === "alldays" ? "underline" : ""}>Alldays</h2></Link>
                </li>
                <li id="third" className="project-tab">
                    <Link to="/projects/granular-synth"><h2 className={open === "granular-synth" ? "underline" : ""}>Granular Synth</h2></Link>
                </li>
            </ul>
        )
    }
};

export default Tabs;
