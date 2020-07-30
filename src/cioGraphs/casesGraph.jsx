import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';


class CasesGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: [],
                datasets:[
                  {
                    label:'Total Cases',
                    fill: false,
                    backgroundColor: '#1371A5',
                    borderColor: '#1371A5',
                    pointRadius: 5,
                    pointHitRadius: 5,
                    pointHoverRadius: 5,
                    lineTension: 0.1,
                    data:[],
                    backgroundColor: [
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5',
                        '#1371A5'
                    ]
                  }
                ]
              }
         }
    }

    componentDidMount() {
        let data = Object.assign({},this.state.data)
        let cases = [...this.props.cases]
        let dates = [...this.props.dates]
        data.datasets[0].data = [...cases]
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
                            text: `Total Cases In Last 10 Days - ${this.props.StateName}`
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
 
export default CasesGraph;