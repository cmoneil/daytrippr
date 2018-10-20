import React from "react";
import MediaQuery from 'react-responsive'
import PropTypes from "prop-types"

const Weather = props => (
  <div>
    <MediaQuery query="(max-device-width: 768px)">
    <div className="container-fluid" style={{backgroundColor: `rgba(255,255,255,0.5)`, paddingBottom: 2, marginBottom: 15, height: 35, paddingTop: 2}}>
    <div className="row">
      <div className="col-3" style={{paddingRight: 0, fontSize: 15}}>
      <p>Temp: {props.temperature}</p>
      </div>
      <div className="col-5" style={{paddingRight: 0, paddingLeft: 2, fontSize: 15}}>
      <p> Chance of Rain: {props.precipitation}</p>
      </div>
      <div className="col-4" style={{paddingLeft: 0, fontSize: 15}}>
      <p>Forecast: {props.summary}</p>
      </div>
    </div>
  </div>
  </MediaQuery>
  <MediaQuery query="(min-device-width: 769px)">
    <div className="container-fluid" style={{backgroundColor: `rgba(255,255,255,0.5)`, paddingBottom: 2, marginBottom: 15, height: 25, paddingTop: 2}}>
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
  </MediaQuery>
  </div>


)

Weather.propTypes = {
  temperature: PropTypes.node,
  precipitation: PropTypes.node,
  summary: PropTypes.node

}
export default Weather;
