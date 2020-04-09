import React, { Component } from "react";
import Chart from "react-apexcharts";
import Paper from '@material-ui/core/Paper';
import "../charts.css";



export default class Line extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      }
    }
    render() {
      return (
        
        
          <Chart className="chartMain" justify="center"
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="275"
            />
            

        
      )
    }
  }
  