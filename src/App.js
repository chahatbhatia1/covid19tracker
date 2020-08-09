import React, { Component } from "react";
import "./App.css";
import "./cioGraphs/ChartJS.css";
import BarGraph from "./cioGraphs/BarGraph";

import { BrowserRouter as Router, Route } from "react-router-dom";

const axios = require("axios");

class App extends Component {
  
  state = {
    loading: true,
    data : {
      //StateName: "Maharashtra",
      cases: [],
      active: [],
      recoveries: [],
      deaths: [],
      //dates: []
    }
  }
  
  componentDidMount() {
    this.fetchAndSaveResponse();
  }

  fetchAndSaveResponse = async () => {
    
    try {
      await axios.all([
        axios.get("https://0vuczorhbk.execute-api.ap-south-1.amazonaws.com/prod/api"),
        axios.get("https://d03c3bgiw4.execute-api.ap-south-1.amazonaws.com/prod/api"),
        axios.get("https://91vcnj2z16.execute-api.ap-south-1.amazonaws.com/prod/api"),
        axios.get("https://8z12wjcl8h.execute-api.ap-south-1.amazonaws.com/prod/api")
      ]).then(axios.spread((...responses) => {
        var data1 = responses[0].data.body;
        var data2 = responses[1].data.body;
        var data3 = responses[2].data.body;
        var data4 = responses[3].data.body;

        // console.log(responseOne)
        // console.log(responseTwo)
        // console.log(responseThree)
        // console.log(responseFour)

        this.setState({
          loading: false,
          data: {
            //StateName: "Maharashtra",
            cases: data1,
            active: data2,
            recoveries: data3,
            deaths: data4,
            //dates
          }
        })
      })).catch(error => {
        // react on errors
        console.error(error);
      })     
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    return (
      <Router 
      //basename={window.location.pathname || " "}
      >
        <div className="container">
          { this.state.loading ?  <h1 className="loader">Loading...</h1> : 
              <Route path="/:repoName/:stateId" 
                render={ (props) => <BarGraph 
                {...props}
                cases={this.state.data.cases} 
                active={this.state.data.active} 
                recoveries={this.state.data.recoveries} 
                deaths={this.state.data.deaths} 
              /> }
            />  
          }
        </div>
      </Router>
    );
  }
}

export default App;


//https://0vuczorhbk.execute-api.ap-south-1.amazonaws.com/prod/api TOTAL
//https://d03c3bgiw4.execute-api.ap-south-1.amazonaws.com/prod/api ACTIVE
//https://91vcnj2z16.execute-api.ap-south-1.amazonaws.com/prod/api RECOVERED
//https://8z12wjcl8h.execute-api.ap-south-1.amazonaws.com/prod/api DEATHS