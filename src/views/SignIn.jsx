import React from "react";
import { Field, formInputData, formValidation } from 'reactjs-input-validator';
import {Link,Route,Redirect,Switch} from 'react-router-dom';
import { API_ROOT } from '../variables/api';
import {
  Button, Form, FormGroup, Label, Input,
  Col,
  Card,CardBody,CardTitle,CardHeader,
  Container
} from "reactstrap";
import routes from "routes.js";
// import "./Login.css";
let session = require('../localSorage');

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      jwtToken: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, inputValue, inputName, validationState, isRequired) {
    const value = (event && event.target.value) || inputValue;
    const { data } = this.state;
    data[inputName] = { value, validation: validationState, isRequired };
    this.setState({
      data,
      isFormValid: false,
      validLogin: false
    });
    // if you want access to your form data
    const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
    // tells you if the entire form validation is true or false
    const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
  }

  tokenData={
    "userName": "gvikas3",
    "userType": "CUSTOMER",
    "fullName": "gnanavikas"
  
}

  data={
      "userName": "gvikas3",
      "userType": "CUSTOMER",
      "password": "Test@123",
      "fullName": "gnanavikas",
      "phoneNumber": "9949699736",
      "email": "gnanavikas93@gmail.com"
    
  }

  
  isLoginValid() {
    
    fetch(`${API_ROOT}/token`,{
      method: 'post',
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify(this.tokenData)
    })
    .then(({ res }) => {
      console.log(res);
      session.setLocal('token', `Bearer ${res.token}`);

      fetch(`${API_ROOT}/rest/user/regiser`,{
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          "Authorization": session.getLocal('token'),
      },
        body: this.data
      })
        .then(({ results }) => this.setState({ person: results }));
    });
    
  }
 
  handleSubmit(event) {
    event.preventDefault();
    this.setState({isFormValid : formValidation(this.state.data)});
    this.isLoginValid();
    if (this.state.isFormValid) {
      // do anything including ajax calls
      this.setState({ callAPI: true });
      console.log(this.props);
    } else {
      this.setState({ callAPI: true, shouldValidateInputs: !this.state.isFormValid });
    }
  }

  
  render() {
    return (
      <div className="content">
        <Container className="login-form">
              <Card>
                <CardHeader >
                  <CardTitle tag="h4">
                  Please Sign In
                  </CardTitle>
                </CardHeader>
                <CardBody>
              <form className="form">
                <Col>
                  <Field
                    validator="isEmail" required
                    label="Email" name="email" placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.data.email}
                    shouldValidateInputs={this.state.shouldValidateInputs}
                  />
                <Field
              validator="isAlphanumeric" required minLength={8}
              minLengthErrMsg="Short passwords are easy to guess. Try one with atleast 8 characters"
              label="Password" name="password" type="password" placeholder="Password"
              onChange={this.handleChange}
              value={this.state.data.password}
              shouldValidateInputs={this.state.shouldValidateInputs}
            />
                </Col>
                <Button
                  block
                  bssize="large"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  Login
          </Button>
          {this.state.isFormValid && (
            <Redirect from="/login "to="/main/schools" />
          )}
              </form>

              <p>Not a registered user? <Link to={`signup`}>Sign up Here</Link></p>
              </CardBody>
              </Card>
          </Container>
      </div>
    );
  }
}
export default SignIn;