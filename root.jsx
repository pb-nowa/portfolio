import React from 'react';
import Project from './projects';
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
                        <Link to="/projects">
                            <h2>PROJECTS</h2>
                        </Link>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/projects" component={Project}/>
                </Switch>
            </div>
        </HashRouter>
        )
    }

}

export default Root;