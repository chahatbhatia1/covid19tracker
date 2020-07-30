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
                    label:'Deaths',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#b74b60',
                    pointRadius: 5,
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
        let deaths = [...this.props.deaths]
        let dates = [...this.props.dates]
        data.datasets[0].data = [...deaths]
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
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    //fontSize: 15,
                                    fontColor: "#ddd",
                                }
                            }],
                        
                        },
                        title: {
                            display: true,
                            fontSize: 15,
                            fontColor: "#ddd",
                            text: `Deaths In Last 10 Days - ${this.props.StateName}`
                        },
                        tooltips: {
                            titleFontSize: 15,
                            bodyFontSize: 15,
                            xPadding: 20,
                        }
                     }}
                />
            </>
         );
    }
}
 
export default ActiveGraph;