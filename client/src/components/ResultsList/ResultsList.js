import React from "react"

const ResultsList = props => (
  <li>
    <div style={{ margin: 5, paddingBottom: 3, borderBottom: "solid 1px #e0e0e0"}}>
      <h5 style={{paddingLeft: 15}}>{props.title}</h5>
    <a href={props.url} target="_blank">
      <button className="btn btn-danger ">Get Info</button>
    </a>
    <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Add to Itinerary</button>
    </div>
  </li> 
  
);

export default ResultsList;