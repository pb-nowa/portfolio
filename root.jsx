import React from 'react';
import Granular from './granular';
import Pokenalysis from './pokenalysis';
import Alldays from './alldays';
import About from './about';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

class Root extends React.Component { 

    render(){
        return(
        <HashRouter>
            <div className="main">
                <div className="header">
                    <div className="contact">
                        <h1>PRESTON NOWAKOWSKI</h1>
                        <div className="info">
                            <h3>(925)321-9577</h3>
                            <h3>|</h3>
                            <a href="mailto:pb.nowa@gmail.com"><h3>pb.nowa@gmail.com</h3></a>
                        </div>
                    </div>

                    <ul className="toolbar">
                        <Link to="/about">
                            <h2>ABOUT</h2>
                        </Link>
                        <Link to="/projects/granular-synth">
                            <h2>PROJECTS</h2>
                        </Link>
                        <a className="fab fa-linkedin-in" href="https://github.com/pb-nowa">
                        </a>
                        <a className="fab fa-github" href="https://www.linkedin.com/in/preston-nowakowski/">
                        </a>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/projects/granular-synth" component={Granular}/>
                    <Route exact path="/projects/pokenalysis" component={Pokenalysis}/>
                    <Route exact path="/projects/alldays" component={Alldays}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </div>
        </HashRouter>
        )
    }

}

export default Root;