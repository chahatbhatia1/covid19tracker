import React, { Component } from 'react';
// import "./ChartJS.css";

import { Bar, Line } from 'react-chartjs-2';


class ChartJS extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: ['Maharashtra', 'Tamil Nadu', 'Delhi', 'Karnataka', 'Andhra Pradesh', 'Gujarat'],
                datasets:[
                  {
                    label:'Active Cases',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    pointRadius: 5,
                    pointHitRadius: 5,
                    pointHoverRadius: 5,
                    lineTension: 0.1,

                    data:[
                        24000,
                        34563,
                        52000,
                        40132,
                        26433,
                        12000,
                        52000,
                        40132,
                        26433,
                        12000
                    ],
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
        let active = [...this.props.active]
        let dates = [...this.props.dates]
        data.datasets[0].data = [...active]
        data.labels = [...dates]
        //console.log(data)
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
                            //fontSize: 25,
                            fontColor: "#ddd",
                            text: 'Active Cases In Last 10 Days'
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
 
export default ChartJS;