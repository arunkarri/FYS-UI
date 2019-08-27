import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Schools from '../pages/SearchSchools';
// import Schools from '../pages/Schools';
// import Register from './Register';

const style = {
  margin: 15,
};

class LoginScreen extends Component {
  constructor(props){
    super(props);
    var loginButtons=[];
    loginButtons.push(
      <div key={"Login-Div"}>
      <MuiThemeProvider>
        <div>
           <RaisedButton label={"Register as User"} primary={true} style={style} onClick={(event) => this.handleClick(event,'User')}/>
       </div>
       </MuiThemeProvider>
       <MuiThemeProvider>
       <div>
          <RaisedButton label={"Register as Admin"} primary={true} style={style} onClick={(event) => this.handleClick(event,'Admin')}/>
      </div>
      </MuiThemeProvider>
      </div>
    )
    this.state={
      username:'',
      password:'',
      LoginScreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      UserbuttonLabel:'Register as User',
      AdminbuttonLabel:'Register as Admin',
      isLogin:true
    }
  }
  componentWillMount(){
    var LoginScreen=[];
    LoginScreen.push(<Login parentContext={this} appContext={this.props.appContext} key={"LoginScreen"}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  LoginScreen:LoginScreen,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;
    if(this.state.isLogin){
      let LoginScreen=[];
      //LoginScreen.push(<Register parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Already registered.Go to Login";
      let loginButtons=[];
      loginButtons.push(
        <div key="login-button">
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      this.setState({
                     LoginScreen:LoginScreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
      let LoginScreen=[],loginButtons=[];
      loginButtons.push(
        <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Register as User"} primary={true} style={style} onClick={(event) => this.handleClick(event,'User')}/>
         </div>
         </MuiThemeProvider>
         <MuiThemeProvider>
         <div>
            <RaisedButton label={"Register as Admin"} primary={true} style={style} onClick={(event) => this.handleClick(event,'Admin')}/>
        </div>
        </MuiThemeProvider>
        </div>
      )
      LoginScreen.push(<Login parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     LoginScreen:LoginScreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      // <div className="LoginScreen" key="LoginScreen">
      //   {this.state.LoginScreen}
      //   <div>
      //     {this.state.loginmessage}
      //     {this.state.loginButtons}
      //   </div>
      // </div>
      <Schools></Schools>
    );
  }
}


export default LoginScreen;
