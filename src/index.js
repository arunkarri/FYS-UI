import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchSchools from './pages/SearchSchools';
import SchoolDetails from './pages/SchoolDetails';
import Donate from './pages/Donate';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home/Home'

const hist = createBrowserHistory();


const routing = (
  <Router history={hist}>
    <div>
      <Switch>
        <Redirect from="*" to="/home" />
      </Switch>
      <Route path="/home" component={Home} />
      <Route path="/schools" component={SearchSchools} />
      <Route path="/details/:code" component={SchoolDetails} />
      <Route path="/donate/:code" component={Donate} />

    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
