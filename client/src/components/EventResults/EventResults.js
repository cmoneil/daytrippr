import React from "react";

const EventResults = props => (
  
  <div className="col-lg-4">
    <div className="card">
      <div className="card-header text-center">Things to See</div>
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
