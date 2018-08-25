import React from "react";

const Weather = props => (
  <div className="container" style={{backgroundColor: `rgba(255,255,255,0.5)`, paddingBottom: 2, marginBottom: 15, height: 25, paddingTop: 2}}>
    <div className="row">
      <div className="col-3" style={{paddingRight: 0, fontSize: 15}}>
      <p>Temp: {props.temperature}</p>
      </div>
      <div className="col-4" style={{paddingRight: 0, paddingLeft: 2, fontSize: 15}}>
      <p> Chance of Rain: {props.precipitation}</p>
      </div>
      <div className="col-5" style={{paddingLeft: 0, fontSize: 15}}>
      <p>Forecast: {props.summary}</p>
      </div>
    </div>
  </div>


)
export default Weather;
