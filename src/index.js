import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchSchools from './pages/SearchSchools';
import FullDetails from './pages/FullDetails';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

const hist = createBrowserHistory();


const routing = (
  <Router history={hist}>
    <div>
      <Switch>
        <Redirect from="*" to="/schools" />
      </Switch>
      <Route path="/schools" component={SearchSchools} />
      <Route path="/details/:code" component={FullDetails} />

    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
