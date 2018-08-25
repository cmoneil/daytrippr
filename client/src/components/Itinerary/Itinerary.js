import React from "react";
import Icon from "../Map/icons/itin.png"


const Itinerary = props => (
  

  <div className="card" style={{backgroundColor: `rgba(255,255,255,0.7)`}}>
    <div className="card-header text-center" style={{marginBottom: 0}}><h5>Itinerary<img alt="museums" style={{paddingLeft: 20}} src={Icon}></img></h5></div>
      <ul className="list-group" style={{maxHeight: 210,
      marginBottom: 10,
      overflow: "scroll"
    }}>
        {props.children}
      </ul>
  </div>


);

export default Itinerary
