import React, {Component} from "react";
import { Field, formInputData, formValidation } from 'reactjs-input-validator';
import {Link,Route,Redirect,Switch} from 'react-router-dom';
import { API_ROOT } from '../../variables/api';

import {
  Button, Form, FormGroup, Label, Input,
  Col,
  Card,CardBody,CardTitle,CardHeader,
  Container
} from "reactstrap";
import routes from "pvtRoutes.js";
// import "./Login.css";

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentWillUnmount(){
  //   this.getRoutes= this.getRoutes.destroy();
  // }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/login") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };


  
  render() {
    return (
      <div>
      <Switch>{this.getRoutes(routes)}</Switch>
      </div>     
    );
  }
}
export default Login;