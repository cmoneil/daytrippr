import React from "react";

const PlacesResults = props => (
  
  <div className="col-lg-4">
    <div className="card">
      <div className="card-header text-center">Places to Go</div>
      <li className="list-group-item">
          {props.children}
      </li>
    </div>
  </div>

);

export default PlacesResults
