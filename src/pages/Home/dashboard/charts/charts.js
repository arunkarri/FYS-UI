import React, { Component } from "react";
import Chart from "react-apexcharts";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Line from "./line/line";
// import "../main.css";
import "./charts.css";
import RadialBar from "./radialBar1/radialBar1";
import RadialBar2 from "./radialBar2/radialBar2";
import Bar from "./bar/bar";
import Countup1 from "./countup1/countup1";
import AppCount from './countup1/countTest';

{/* Charts Function */}

export default class Charts extends Component {
    
    render() {
      return (
        
        /* Charts */

        <div>

          {/* Charts Start */}

          {/* Chart Top Section Start*/}

          <Grid container className="root" spacing={1}>

            {/* Line Chart Section*/}

            <Grid item xs={12} sm={6} className="grid" justify="center">

              {/* Line Chart Label */}

              <h2 className="label">Label 1</h2>

              {/* Line Chart */}
              <Paper className="paper paperInfo" xs={12} sm={6}>
                <Line />
              </Paper>
            
            </Grid>
             
            {/* Radial Bar Chart Section */} 
            <Grid item xs={12} sm={6} className="grid" justify="center">
              
              {/* Radial Bar Chart Label */}

              <h2 className="label">Label 1</h2>

              {/* Radial Bar Chart */}

              <Paper className="paper" xs={12} sm={6} >
               
                <AppCount />
              </Paper>
            </Grid>
            
          </Grid>
          
          {/* Chart Top Section End */}

          {/**************************/}

          {/* Chart Bottom Section */}
          
          <Grid container className="root" spacing={1}>

            {/* Radial Bar Chart 2 Section */}

            <Grid item xs={12} sm={6} className="grid">

              {/* Radial Bar Chart 2 Label */}

              <h2 className="label">Label 1</h2>

              {/* Radial Bar Chart 2 */}

              <Paper  className="paper" xs={12} sm={6}>
                <RadialBar2 />
              </Paper>
            </Grid>
            
            {/* Bar Chart Section */}

            <Grid item xs={12} sm={6} className="grid">

              {/* Bar Chart Label */}

              <h2 className="label">Label 1</h2>

              {/* Bar Chart */}

              <Paper className="paper" xs={12} sm={6}>
                <Bar />
              </Paper>

            </Grid>
            
          </Grid>

          {/* Chart Bottom Section End */}
            
          {/* Charts End */}

          </div>
        
      )
    }
  }
  