import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "../img/logo.png";
import Grid from '@material-ui/core/Grid';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./header.css"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBarBg:{
    background: 'transparent'
  }

}));

{/* App Bar Function */}

export default function ButtonAppBar() {
  const classes = useStyles();

  let redirect= false;
  

  function redirectToSchools() {
   
    redirect= true;

  }

  return (
    
    /* App Bar */

    <div className={classes.root}>

      {/* App Bar Start */}

      <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>        
          
          <Toolbar >

          {/* Logo */}
          <Grid item xs={6} sm={6}>
            <div>
              <img src={Logo} className="logo"></img>    
            
            
            {/* Title */}

            
            <Typography variant="h3" className="title">
              Fund Your School
            </Typography>
            </div>
            </Grid>


            {/* Take me to the App Button */}

<Grid item xs={3} sm={3}></Grid>

<Grid item xs={3} sm={3}>

<div className="wrapper">
  <a className="appButton" onClick="">Take me to the App</a>
 
  </div>
            
            
            
            </Grid>
          </Toolbar>
      </AppBar>

      {/* App Bar End */}

    </div>


  );
}
