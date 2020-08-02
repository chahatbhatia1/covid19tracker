import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
//import 'chartjs-plugin-datalabels';


class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: ['cg','ccdd','cccc'],
                datasets:[
                    { 
                        label: 'Total',
                        type:'line',
                        position: 'right',
                        //
                        data: [560000, 660000, 600000, 460000, 600000, 360000, 600000,600000, 360000, 600000],
                        fill: false,
                        borderColor: '#EC932F',
                        backgroundColor: '#EC932F',
                        pointBorderColor: '#EC932F',
                        pointBackgroundColor: '#EC932F',
                        pointHoverBackgroundColor: '#EC932F',
                        pointHoverBorderColor: '#EC932F',
                        pointRadius: 3,
                        pointHitRadius: 6,
                        //yAxisID: 'y-axis-2'
                      },
                  {
                    label:'Deaths',
                    fill: false,
                    type: 'bar',
                    data:[10,20,30],
                    backgroundColor: "#b74b60",
					hoverBackgroundColor: "#b74b60",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
                  },
                  {
                    label:'Recovered',
                    fill: false,
                    type: 'bar',
                    data:[10,20,30],
                    backgroundColor: "#3c7c76",
					hoverBackgroundColor: "#3c7c76",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
                  },
                  {
                    label:'Active',
                    fill: false,
                    type: 'bar',
                    data:[10,20,30],
                    backgroundColor: "#571B59",
					hoverBackgroundColor: "#571B59",
					hoverBorderWidth: 2,
					hoverBorderColor: 'lightgrey'
                  },
                  
                ]
              }
         }
    }

    componentDidMount() {
        let data = Object.assign({},this.state.data)

        let cases = [...this.props.cases]
         let active = [...this.props.active]
         let recoveries = [...this.props.recoveries]
         let deaths = [...this.props.deaths]
         let dates = [...this.props.dates]

        data.datasets[0].data = [...cases]
        data.datasets[3].data = [...active]
        data.datasets[2].data = [...recoveries]
        data.datasets[1].data = [...deaths]
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
                        //responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor: "#ddd",                      
                                },
                                gridLines: {
                                    zeroLineColor: 'rgba(255, 255, 255, 1)'
                                },
                                stacked: true
                            }],
                            yAxes: [                                  
                                    {
                                    ticks: {
                                        fontColor: "#ddd",
                                        startAtZero: true,
                                        min: 0,
                                        stepSize: 100000
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
                            titleFontSize: 12,
                            bodyFontSize: 12,
                            xPadding: 20,
                        },
                         legend : {
                            display: true,
                            position: "top",
                            labels: {
                              fontColor: "#fff",
                              fontSize: 14,
                              boxWidth: 20
                            }
                        }
                     }}
                />
            </>
         );
    }
}
 
export default BarGraph;