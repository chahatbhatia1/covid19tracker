import React, { Component } from 'react';
import "./ChartJS.css";

import { Bar } from 'react-chartjs-2';


class ChartJS2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: ['Maharashtra', 'Tamil Nadu', 'Delhi', 'Karnataka', 'Andhra Pradesh', 'Gujarat'],
                datasets:[
                  {
                    label:'Recoveries',
                    data:[
                      24000,
                      34563,
                      52000,
                      40132,
                      26433,
                      12000
                    ],
                    backgroundColor: [
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
        let recoveries = [...this.props.recoveries]
        data.datasets[0].data = [...recoveries]
        console.log(data)
        this.setState({
            data
        })
    }

    render() { 
        return ( 
            <>
                <Bar
                    data={this.state.data}
                    width={100}
                    height={50}
                    options={{ 
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontSize: 25
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    fontSize: 25
                                }
                            }]
                        },
                        title: {
                            display: true,
                            fontSize: 32,
                            text: 'Recoveries In Top States'
                        },
                        tooltips: {
                            titleFontSize: 25,
                            bodyFontSize: 25,
                            xPadding: 20,
                        }
                     }}
                />
            </>
         );
    }
}
 
export default ChartJS2;