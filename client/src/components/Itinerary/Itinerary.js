import React from "react";


const Itinerary = props => (
  

  <div className="card">
    <div className="card-header text-center">Itinerary</div>
      <ul className="list-group" style={{maxHeight: 300,
      marginBottom: 10,
      overflow: "scroll"
    }}>
        {props.children}
      </ul>
  </div>


);

export default Itinerary
