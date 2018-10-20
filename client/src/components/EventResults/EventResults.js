import React from "react";
import Icon from "../Map/icons/events.png"
import PropTypes from "prop-types"

const EventResults = props => (
  
  <div className="col-lg-3 col-sm-12" style={{marginBottom: 5}}>
    <div className="card" style={{backgroundColor: `rgba(255,255,255,0.6)`}}>
      <div className="card-header text-center"><h5>Things to See<img alt="tickets" style={{paddingLeft: 20}}src={Icon}></img></h5></div>
      <ul className="list-group" style={{maxHeight: 300,
        marginBottom: 10,
        overflow: "scroll"
      }}>
        {props.children}
      </ul>
    </div>
  </div>

);

EventResults.propTypes ={
  children: PropTypes.node
}

export default EventResults
