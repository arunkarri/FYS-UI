import React, { Component } from "react";
import Chart from "react-apexcharts";
import Paper from '@material-ui/core/Paper';
import { API_ROOT } from '../../../../../variables/api';
import "../charts.css";
import GaugeChart from 'react-gauge-chart';

export default class RadialBar extends Component {
    constructor(props) {
      super(props);
   
      this.state = {

        fund: 1200,

        optionsRadial: {
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: "70%",
                background: "#fff",
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: "#fff",
                strokeWidth: "67%",
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
  
              dataLabels: {
                showOn: "always",
                name: {
                  offsetY: -20,
                  show: true,
                  color: "#888",
                  fontSize: "13px"
                },
                value: {
                  formatter: function(val) {

                  // To be changed

                  return val;
                  },

                  color: "#111",
                  fontSize: "30px",
                  show: true
                }
              }
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: ["#ABE5A1"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, Infinity]
            }
          },
          stroke: {
            lineCap: "round"
          },
          labels: ["Funds"]
        },

        seriesRadial: [10]
        
      }     
        
      
    }

    componentDidMount() {

     

      fetch(`${API_ROOT}/rest/transaction/getTotal`,{
         method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": JSON.stringify(localStorage.getItem('token'))
        }
      })
        .then((resp) => {
          return resp.clone().json();
        })
        .then((res) => {
          console.log(res);
          this.setState({
            fund: res,
            seriesRadial: [res]
          })
          console.log(this.state.fund);
        });
    }

    render() {

      return (
        
        // <div style={styles.guageBg}>
        //                                         <GaugeChart id="gauge-chart3" nrOfLevels={3} colors={["red", "yellow", "#00FF00"]} arcWidth={0.2} percent={(project.acheivedTarget * 100) / project.targetAmount} />
        //   </div>
        
          <Chart className="chartMain" justify="center"
              options={this.state.optionsRadial}
              series={this.state.seriesRadial}
              type="radialBar"
              height="290"
            />
            



        
      )
    
  }
}
  