import React from "react"

const ResultsList = props => (
<ul className="list-group-item">
    <h4>{props.title}</h4>
        <a href={props.url} target="_blank">
          <button className="btn btn-danger ">View Tickets</button>
        </a>
        <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Add to Itinerary</button>
</ul>
);

export default ResultsList;