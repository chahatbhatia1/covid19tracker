import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
//import 'chartjs-plugin-datalabels';


class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stateName: "",
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
        console.log(this.props)
        let currentState = this.props.match.params.stateId
        console.log(currentState)
        let states = {
            "andamanAndNicobarIslands": "Andaman & Nicobar Islands",
            "maharashtra": "Maharashtra",
            "rajasthan": "Rajasthan",
            "delhi": "Delhi",
            "andhraPradesh": "Andhra Pradesh",  //TODO
            "arunachalPradesh": "Arunachal Pradesh",
            "assam": "Assam",
            "bihar": "Bihar",
            "chattisgarh": "Chattisgarh",
            "goa": "Goa",
            "gujarat": "Gujarat",
            "haryana": "Haryana",
            "himachalPradesh": "Himachal Pradesh",
            "jharkhand": "Jharkhand",
            "kerela": "Kerela",                 //TODO
            "karnataka": "Karnataka",
            "madhyaPradesh": "Madhya Pradesh",
            "manipur": "Manipur",
            "meghalaya": "Meghalaya",
            "mizoram": "Mizoram",
            "nagaland": "Nagaland",
            "punjab": "Punjab",
            "odisha": "Odisha",
            "sikkim": "Sikkim",
            "tamilNadu": "Tamil Nadu",
            "telangana": "Telangana",
            "tripura": "Tripura",
            "uttarPradesh": "Uttar Pradesh",
            "uttarakhand": "Uttarakhand",
            "westBengal": "West Bengal"
        }
        let data = Object.assign({},this.state.data)

        let data1 = [...this.props.cases]
        let data2 = [...this.props.active]
        let data3 = [...this.props.recoveries]
        let data4 = [...this.props.deaths]


        //:TODO handling params logic

        let l1 = data1.length
        let l2 = data2.length

        console.log(l1,l2)

        let cases = []
        let active = []
        let recoveries = []
        let deaths = []
        let dates = []

        let stateName = states[currentState]

          for (let i=0; i<l1; i++) {
            if(data1[i].District === stateName) {
                cases.push(data1[i].TotalCase);
                dates.push(data1[i].date);
            }
          }
          for (let i=0; i<l2; i++) {
            if(data2[i].District === stateName) {
                active.push(data2[i].ActiveCases);
                
            }
          }
          for (let i=0; i<l2; i++) {
            if(data3[i].District === stateName) {
                recoveries.push(data3[i].Recoveries);
            }
          }
          for (let i=0; i<l2; i++) {
            if(data4[i].District === stateName) {
                deaths.push(data4[i].Deaths);
            }
          }

          const L = active.length;
          let temp = 0
          cases = []

          for (let i=0; i<L; i++) {
            temp = parseInt(active[i]) + parseInt(recoveries[i]) + parseInt(deaths[i])
            cases.push(temp.toString())
        }

        console.log(active,recoveries,deaths,cases)

        data.datasets[0].data = [...cases]
        data.datasets[3].data = [...active]
        data.datasets[2].data = [...recoveries]
        data.datasets[1].data = [...deaths]
        data.labels = [...dates]
        
        this.setState({
            stateName: states[currentState],
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
                            text: `${this.state.stateName} - Last 10 Days Trend Of Covid-19 Cases`
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