import React from "react";

const PlacesResults = props => (
  
  <div className="col-lg-4">
    <div className="card">
      <div className="card-header text-center">Places to Go</div>
        <ul className="list-group" style={{maxHeight: 300,
          marginBottom: 10,
          overflow: "scroll"
        }}>
          {props.children}
        </ul>
    </div>
  </div>
  

);

export default PlacesResults
