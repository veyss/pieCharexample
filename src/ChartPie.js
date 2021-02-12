import React, { Component } from 'react';
import Chart from "react-apexcharts";
// const turler=['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
// const degerler=[10, 20, 30, 40,50]
class ChartPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [10, 20, 30, 40, 50],
            options: {
                plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: true,                      
                        }                      
                       
                      }
                    }
                  },
                chart: {
                    type: 'donut',
                    background: 'lightgreen',
                    show: true,
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],

                legend: {
                    show: true,
                    position: 'bottom'
                },            
                   
                
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: "100%"

                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            };
        }
        render() {
            return (
                <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="donut" />
                </div>

            );
        }
    }

    export default ChartPie;




