import React from 'react';
import Granular from './granular';
import Pokenalysis from './pokenalysis';
import Alldays from './alldays';
import About from './about';
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

class Root extends React.Component { 

    render(){
        return(
        <HashRouter>
            <div className="main">
                <div className="header">
                    <div className="contact">
                        <Link to="/about"><h1>PRESTON NOWAKOWSKI</h1></Link>
                        <div className="info">
                            <h3 className="contact">(925)321-9577</h3>
                            <h3>|</h3>
                            <a className="mail-hyperlink" href="mailto:pb.nowa@gmail.com"><h3 className="contact">pb.nowa@gmail.com</h3></a>
                        </div>
                    </div>

                    <ul className="toolbar">
                        <Link to="/about">
                            <h2>ABOUT</h2>
                        </Link>
                        <Link to="/projects/pokenalysis">
                            <h2>PROJECTS</h2>
                        </Link>
                        <a className="fab fa-linkedin-in" href="https://www.linkedin.com/in/preston-nowakowski/"></a>
                        <a className="fab fa-github" href="https://github.com/pb-nowa"></a>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/projects/granular-synth" component={Granular}/>
                    <Route exact path="/projects/pokenalysis" component={Pokenalysis}/>
                    <Route exact path="/projects/alldays" component={Alldays}/>
                    <Route exact path="/about" component={About}/>
                    <Redirect path="/projects" to="/projects/pokenalysis"/>
                    <Redirect path="/"  to="/about"/>
                </Switch>
            </div>
        </HashRouter>
        )
    }

}

export default Root;