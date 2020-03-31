import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  
  state = {
    todos : [],
  }
  
  componentDidMount() {
    this.interval = setInterval(fetch("https://coronavirus-19-api.herokuapp.com/countries",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({
        todos : response
      })
    })
    .catch(err => {
      console.log(err);
    }),60000);
 }
  render(){
    return (
      <div className="container-fluid mt-5">
        <div className="col-xs-12 col-lg-6 left">

          <h2 className="text-center h1 mt-5">Novel Corona (COVID-19) Tracker (Countrywise)</h2>
          {this.state.todos.map((todo) => (
          <div className="card mt-4 card1" id={todo.country}>
            <div className="card-body">
              <h5 className="card-title">{todo.country}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
               
                <span>
                  Total Cases : {todo.cases}
                </span>
                <br />               
                <span>
                  Recovered : {todo.recovered}
                </span>
                <br />
                <span>
                  Deaths : {todo.deaths}
                </span>
                <br />
                <span>
                  Active Cases : {todo.active}
                </span>                       
              </h6>
            </div>
          </div>
          ))}
        </div>
        <div className="col-xs-12 col-lg-6 right mt-5">
            <h2>What is Corona Virus ?</h2>
            <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing.You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
{/* 
<div style={{width:"100%" , 
  height:0,
  paddingBottom:"100%",
  position:relative}}>
  <iframe src="https://giphy.com/embed/YPhuwt9pV2XLM2HIq4"  style = { position : absolute , frameBorder : 0,width:"100%", height:"100%"} class="giphy-embed" allowFullScreen></iframe>
</div> */}
<iframe src="https://giphy.com/embed/YPhuwt9pV2XLM2HIq4"  class="giphy-embed" allowFullScreen></iframe>
<p className="note">( Scroll Down to see all the countries affected )</p>
        </div>
      </div>
  );
  }
}

export default App;
