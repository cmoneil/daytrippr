import React from "react";

const RestResults = props => (
  
  <div className="col-lg-3">
    <div className="card">
    <div className="card-header text-center">Where to Eat</div>
      <ul className="list-group" style={{maxHeight: 300,
      marginBottom: 10,
      overflow: "scroll"
      }}>
        {props.children}
    </ul>
  </div>
</div>

);

export default RestResults
