import React, {Component, useState} from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props); 
    this.state = {
      weather: [], 
    }
  }

  componentDidMount () {
    //API call
  fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=43.651070&lon=-79.347015&exclude=hourly,minutely&units=metric&cnt=5&appid=937e8ab3893a0ce93dba883407ce65e5")
    .then (res => res.json())
    .then (data => this.setState({ weather: data.daily }))
  }


  render(){
this.state.weather.splice(5)

const date = (e) => { 
  console.log("here")
  let a = Date.now()
  let dateObj = new Date(e)
  console.log(dateObj)
  const format = {
    weekday: 'short',
   
  }

  console.log(e)
  return(new Date (e*1000).toLocaleString('en-gb', format))
}
date()
  return (
    <div className="App">

      <h2>Weather App</h2>


<div className='container'>

    {this.state.weather.map((day, index) => {

    return <span className = "inner-container">
    
      <p className='bold'>{date(day.dt)}</p>

      <img className = "" src = {(`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`)} />
      <div className="flexbox">
       <p className= "inline left bold">{Math.round(day.temp.max)}°</p>
       <p className = "inline right" >{Math.round(day.temp.min)}°</p>
       </div>
    </span>
    })}



</div>

    </div>
  );
}
}

export default App;
