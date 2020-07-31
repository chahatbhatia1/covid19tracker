import React, { Component } from 'react';
// import "./ChartJS.css";

import { Line } from 'react-chartjs-2';


class ActiveGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: [],
                datasets:[
                  {
                    label:'Active Cases',
                    fill: false,
                    backgroundColor: '#571B59',
                    borderColor: '#571B59',
                    pointRadius: 3,
                    pointHitRadius: 5,
                    pointHoverRadius: 5,
                    lineTension: 0.1,
                    data:[],
                    backgroundColor: [
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59',
                        '#571B59'
                    ]
                  },
                  {
                    label:'Recovered Cases',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#3c7c76',
                    pointRadius: 3,
                    pointHitRadius: 5,
                    pointHoverRadius: 5,
                    lineTension: 0.1,
                    data:[],
                    backgroundColor: [
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76',
                        '#3c7c76'
                    ]
                  },
                  {
                    label:'Deaths',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#b74b60',
                    pointRadius: 3,
                    pointHitRadius: 5,
                    pointHoverRadius: 5,
                    lineTension: 0.1,
                    data:[],
                    backgroundColor: [
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60',
                        '#b74b60'
                    ]
                  }
                ]
              }
         }
    }

    componentDidMount() {
        let data = Object.assign({},this.state.data)
        let active = [...this.props.active]
        let recoveries = [...this.props.recoveries]
        let deaths = [...this.props.deaths]
        let dates = [...this.props.dates]
        data.datasets[0].data = [...active]
        data.datasets[1].data = [...recoveries]
        data.datasets[2].data = [...deaths]
        data.labels = [...dates]
        
        this.setState({
            data
        })
    }

    render() { 
        return ( 
            <>
                <Line
                    data={this.state.data}
                    // width={100}
                    // height={50}
                    options={{ 
                        scales: {
                            legend: {
                                labels: {
                                    fontColor: "white",
                                    //fontSize: 18
                                }
                            },
                            xAxes: [{
                                ticks: {
                                    //fontSize: 15,
                                    fontColor: "#ddd",
                                },
                                gridLines: {
                                    zeroLineColor: 'rgba(255, 255, 255, 1)'
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    //fontSize: 15,
                                    fontColor: "#ddd",
                                    startAtZero: true,
                                    min: 0,  
                                },
                                gridLines: {
                                    zeroLineColor: 'rgba(255, 255, 255, 1)'
                                }
                            }],
                            
                        
                        },
                        title: {
                            display: true,
                            fontSize: 15,
                            fontColor: "#ddd",
                            text: `Covid-19 Cases In Last 10 Days - ${this.props.StateName}`
                        },
                        tooltips: {
                            titleFontSize: 10,
                            bodyFontSize: 10,
                            xPadding: 20,
                        }
                     }}
                />
            </>
         );
    }
}
 
export default ActiveGraph;