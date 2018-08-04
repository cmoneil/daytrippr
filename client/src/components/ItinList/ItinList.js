import React from "react"

const ItinList = props => (
<ul className="list-group-item">
    <h4>{props.title}</h4>
    <p>{props.snippet}</p>
        <a href={props.url} target="_blank">
          <button className="btn btn-danger ">View Article</button>
        </a>
        <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
    <p>Date Published: {props.date}</p>
</ul>
);

export default ItinList;