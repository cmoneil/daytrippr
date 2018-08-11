import React from "react"

const ResultsList = props => (
  <li className="list-group-item list-group-item-action" style={{marginBottom: 60}}>
    <div className="d-flex w-100 justify-content-between">
      <h5>{props.title}</h5>
    </div>
    <a href={props.url} target="_blank">
      <button className="btn btn-danger ">Get Info</button>
    </a>
    <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Add to Itinerary</button>
  </li> 
);

export default ResultsList;