import React, { Component } from "react";
import "./App.css";
import "./cioGraphs/ChartJS.css";
import BarGraph from "./cioGraphs/BarGraph";

//import CasesGraph from './cioGraphs/casesGraph';
//import ActiveGraph from './cioGraphs/activeGraph';
//import RecoveriesGraph from './cioGraphs/recoveriesGraph';
//import DeathsGraph from './cioGraphs/deathsGraph';

const axios = require("axios");

class App extends Component {
  
  state = {
    loading: true,
    data : {
      StateName: "Maharashtra",
      cases: [],
      active: [],
      recoveries: [],
      deaths: [],
      dates: []
    }
  }
  
  componentDidMount() {
    this.getData();
  }

  getData =  () => {
      
    let cachedData = localStorage.getItem("CovidData")
    
    if(cachedData === null) {
       this.fetchAndSaveResponse();
        
     }
    else {
      this.getSessionData();
      this.fetchAndSaveResponse();
      //this.getSessionData();
    }
  }

  fetchAndSaveResponse = async () => {
    try {
      await axios.all([
        axios.get("https://0vuczorhbk.execute-api.ap-south-1.amazonaws.com/prod/api"),
        axios.get("https://d03c3bgiw4.execute-api.ap-south-1.amazonaws.com/prod/api"),
        axios.get("https://91vcnj2z16.execute-api.ap-south-1.amazonaws.com/prod/api"),
        axios.get("https://8z12wjcl8h.execute-api.ap-south-1.amazonaws.com/prod/api")
      ]).then(axios.spread((...responses) => {
        var responseOne = responses[0]
        var responseTwo = responses[1]
        var responseThree = responses[2]
        var responseFour = responses[3]

        console.log(responseOne.data.body)

        let data1 = responseOne.data.body;
        let data2 = responseTwo.data.body;
        let data3 = responseThree.data.body;
        let data4 = responseFour.data.body;

        localStorage.setItem("CovidData", JSON.stringify([[...data1],[...data2],[...data3],[...data4]]));

        this.getSessionData();
        })).catch(error => {
          // react on errors
          console.error(error);
        })     
    } catch (error) {
      console.error(error);
    }
  }


  getSessionData = () => {
    let data = JSON.parse(localStorage.getItem("CovidData"))
    
    console.log(data)
    const cases = []
    const active = []
    const recoveries = []
    const deaths = []
    const dates = []

    //let temp = []
    let l1 = data[0].length;
    let l2 = data[1].length;

    //console.log(l1,l2,this.state.data.StateName)

    
      for (let i=0; i<l1; i++) {
        if(data[0][i].District === this.state.data.StateName) {
            cases.push(data[0][i].TotalCase);
            dates.push(data[0][i].date);
        }
      }
      for (let i=0; i<l2; i++) {
        if(data[1][i].District === this.state.data.StateName) {
            active.push(data[1][i].ActiveCases);
            
        }
      }
      for (let i=0; i<l2; i++) {
        if(data[2][i].District === this.state.data.StateName) {
            recoveries.push(data[2][i].Recoveries);
        }
      }
      for (let i=0; i<l2; i++) {
        if(data[3][i].District === this.state.data.StateName) {
            deaths.push(data[3][i].Deaths);
        }
      }
    
   
  
    this.setState({
      loading: false,
      data: {
        StateName: "Maharashtra",
        cases,
        active,
        recoveries,
        deaths,
        dates
      }
    })
    // console.log(cases)
    // console.log(active)
    // console.log(recoveries)
    // console.log(deaths)
  }

  render(){
    return (
      <div className="container">
        {this.state.loading ?  <h1 className="loader">Loading...</h1> : <BarGraph active={this.state.data.active} recoveries={this.state.data.recoveries} deaths={this.state.data.deaths} dates={this.state.data.dates} StateName={this.state.data.StateName}/> }
        {/* {this.state.loading ?  null : <RecoveriesGraph recoveries={this.state.data.recoveries} dates={this.state.data.dates} StateName={this.state.data.StateName}/> }
        {this.state.loading ?  null : <DeathsGraph deaths={this.state.data.deaths} dates={this.state.data.dates} StateName={this.state.data.StateName}/> } */}
        {/* {this.state.loading ?  null : <CasesGraph cases={this.state.data.cases} dates={this.state.data.dates} StateName={this.state.data.StateName}/> } */}
      </div>
  );
  }
}

export default App;


//axios.get("https://0vuczorhbk.execute-api.ap-south-1.amazonaws.com/prod/api") TOTAL
//axios.get("https://d03c3bgiw4.execute-api.ap-south-1.amazonaws.com/prod/api") ACTIVE
//axios.get("https://91vcnj2z16.execute-api.ap-south-1.amazonaws.com/prod/api") RECOVERED
//axios.get("https://8z12wjcl8h.execute-api.ap-south-1.amazonaws.com/prod/api") DEATHS