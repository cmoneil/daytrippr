import React from "react";

const ParksResults = props => (
  
  <div className="col-lg-3">
    <div className="card">
      <div className="card-header text-center">Parks to See</div>
        <ul className="list-group" style={{maxHeight: 300,
          marginBottom: 10,
          overflow: "scroll"
        }}>
          {props.children}
        </ul>
    </div>
  </div>
  

);

export default ParksResults
