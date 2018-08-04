import React from "react";

const EventResults = props => (
  
  <div className="col-lg-4">
  <div className="card">
    <div className="card-header text-center">Things to See</div>
    <li className="list-group-item">
        {props.children}
    </li>
  </div>
</div>

);

export default EventResults
