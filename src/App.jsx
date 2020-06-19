import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'; 

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
            <Router>
                <>
                <Link className="btn btn-primary btn-sm m-2">Go Home</Link>
                <Link className="btn btn-secondary btn-sm m-2">View Films</Link>
                <Link className="btn btn-secondary btn-sm m-2">View People</Link>
                <Switch>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                </Switch>
                </>
            </Router>
            </div>
        )
    }
}