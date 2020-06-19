import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from './Home';
import Films from './Films';
import People from './People';
import SingleFilm from './SingleFilm';
import SinglePerson from './SinglePerson';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <>
            <Link to="/" className="btn btn-primary btn-sm m-2">Go Home</Link>
            <Link to="/films" className="btn btn-secondary btn-sm m-2">View Films</Link>
            <Link to="/people" className="btn btn-secondary btn-sm m-2">View People</Link>
            <Switch>
                <Route exact path="/" component={ Home }></Route>
                <Route path="/films/:id" component={ SingleFilm } />
                <Route path="/films" component={ Films }></Route>
                <Route path="/people/:id" component={ SinglePerson }></Route>
                <Route path="/people" component={ People }></Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}
