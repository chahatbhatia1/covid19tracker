import React, { Component } from 'react';
// import "./ChartJS.css";

import { Line } from 'react-chartjs-2';


class ActiveGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            StateName: "",
            data: {
                labels: [],
                datasets:[
                  {
                    label:'Recovered Cases',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#3c7c76',
                    pointRadius: 5,
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
        
        this.setState({
            StateName: this.props.StateName,
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
                            text: `Recovered Cases In Last 10 Days - ${this.state.StateName}`
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