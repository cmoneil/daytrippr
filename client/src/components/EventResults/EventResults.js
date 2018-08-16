import React from "react";
import Icon from "../Map/icons/events.png"

const EventResults = props => (
  
  <div className="col-lg-3">
    <div className="card">
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

export default EventResults
