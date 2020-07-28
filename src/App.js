import React, { Component } from "react";
import "./App.css";
import ChartJS from './cioTiles/ChartJS';
//import ChartJS2 from './cioTiles/ChartJS_2';
//import ChartJS3 from './cioTiles/ChartJS_3';
const axios = require("axios");

class App extends Component {
  
  state = {
    loading: true,
    data : {
      active: [],
      //recoveries: [],
      //deaths: []
      dates: []
    }
  }
  
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await axios.get("https://d03c3bgiw4.execute-api.ap-south-1.amazonaws.com/prod/api");
      let data = response.data.body;
      console.log(data[0].state.includes("Andhra"));
      const active = []
      const dates = []

      let temp = []
      let l = data.length;

      for (let i=0; i<l; i++) {
        if(data[i].District == "Maharashtra") {
            active.push(data[i].ActiveCases);
            dates.push(data[i].date);
        }
      }
    
      // console.log(temp);

      // const recoveries = []
      // const deaths = []
      
      //active.push(data[19].active_Cases,data[29].active_Cases,data[7].active_Cases,data[14].active_Cases,data[0].active_Cases,data[9].active_Cases)
      //recoveries.push(data[19].recoveries,data[29].recoveries,data[7].recoveries,data[14].recoveries,data[0].recoveries,data[9].recoveries)
      //deaths.push(data[19].deaths,data[29].deaths,data[7].deaths,data[14].deaths,data[0].deaths,data[9].deaths)
      
      this.setState({
        loading: false,
        data: {
          active,
          //recoveries,
          //deaths
          dates
        }
    })
      console.log(active)
      console.log(dates)
      // console.log(recoveries)
      // console.log(deaths)
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    return (
      <div className="container">
        {this.state.loading ?  <h1 className="loader">Loading...</h1> : <ChartJS active={this.state.data.active} dates={this.state.data.dates}/>}
        {/*   {this.state.loading ?  <h1 className="loader">Loading...</h1> : <ChartJS2 recoveries={this.state.data.recoveries}/>}
        {this.state.loading ?  <h1 className="loader">Loading...</h1> : <ChartJS3 deaths={this.state.data.deaths}/>} */}
      </div>
  );
  }
}

export default App;
