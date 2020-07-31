import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
//import 'chartjs-plugin-datalabels';

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: [],
                datasets:[
                  {
                    label:'Deaths',
                    fill: false,
                    data:[],
                    backgroundColor: "#b74b60",
					hoverBackgroundColor: "#b74b60",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
                  },
                  {
                    label:'Recovered',
                    fill: false,
                    data:[],
                    backgroundColor: "#3c7c76",
					hoverBackgroundColor: "#3c7c76",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
                  },
                  {
                    label:'Active',
                    fill: false,
                    data:[],
                    backgroundColor: "#571B59",
					hoverBackgroundColor: "#571B59",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
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
        data.datasets[2].data = [...active]
        data.datasets[1].data = [...recoveries]
        data.datasets[0].data = [...deaths]
        data.labels = [...dates]
        
        this.setState({
            data
        })
    }

    render() { 
        return ( 
            <>
                <Bar
                    data={this.state.data}
                    options={{ 
                        responsive: true,
                        scales: {
                            legend: {
                                labels: {
                                    fontColor: "white",
                                }
                            },
                            xAxes: [{
                                ticks: {
                                    fontColor: "#ddd",                      
                                },
                                gridLines: {
                                    zeroLineColor: 'rgba(255, 255, 255, 1)'
                                },
                                stacked: true
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor: "#ddd",
                                    startAtZero: true,
                                    min: 0,
                                },
                                gridLines: {
                                    zeroLineColor: 'rgba(255, 255, 255, 1)'
                                },
                                stacked: true
                            }],   
                        },
                        title: {
                            display: true,
                            fontSize: 15,
                            fontColor: "#ddd",
                            text: `${this.props.StateName} - Last 10 Days Trend Of Covid-19 Cases`
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
 
export default BarGraph;