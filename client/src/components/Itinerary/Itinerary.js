import React from "react";

const Itinerary = props => (
  

  <div className="card">
    <div className="card-header text-center">Itinerary</div>
    <li className="list-group-item">
        {props.children}
    </li>
  </div>


);

export default Itinerary
