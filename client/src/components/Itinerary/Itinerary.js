import React from "react";


const Itinerary = props => (
  

  <div className="card">
    <div className="card-header text-center" style={{marginBottom: 10}}><h5>Itinerary</h5></div>
      <ul className="list-group" style={{maxHeight: 245,
      marginBottom: 10,
      overflow: "scroll"
    }}>
        {props.children}
      </ul>
  </div>


);

export default Itinerary
