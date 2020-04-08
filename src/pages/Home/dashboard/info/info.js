import React, { Component } from "react";
// import "../main.css";
import Grid from '@material-ui/core/Grid';
import Cards from "./cards/cards";



export default function Info() {
    return(
        

        <Grid container className="root" spacing={1}>
            
          <Grid item xs className="grid">
            <Cards />
          </Grid>
        </Grid>

    )
  
}