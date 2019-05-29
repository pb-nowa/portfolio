import React from 'react';
import Project from './projects';
import About from './about';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

class Root extends React.Component { 

    render(){
        return(
        <HashRouter>
            <div className="main">
                <div className="header">
                    <h1>PRESTON NOWAKOWSKI</h1>
                    <ul className="toolbar">
                        <Link to="/about">
                            <h2>ABOUT</h2>
                        </Link>
                        <Link to="/projects/granular-synth">
                            <h2>PROJECTS</h2>
                        </Link>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/projects/granular-synth" component={Project}/>
                    <Route exact path="/projects/pokenalysis" component={Project}/>
                    <Route exact path="/projects/alldays" component={Project}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </div>
        </HashRouter>
        )
    }

}

export default Root;