import React from "react";

const RestResults = props => (
  
  <div className="col-lg-4">
  <div className="card">
    <div className="card-header text-center">Where to Eat</div>
    <li className="list-group-item">
        {props.children}
    </li>
  </div>
</div>

);

export default RestResults
