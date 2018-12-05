import React from "react"

//Diplays no results in lists when no results returned
const NoResults = () => (
  <li className="list-group-item list-group-item-action" style={{marginBottom: 20}}>
    <div className="d-flex w-100 justify-content-between">
      <h5>No Results to Display</h5>
    </div>
  </li> 
);

export default NoResults;