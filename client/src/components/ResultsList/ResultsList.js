import React from "react"
import PropTypes from "prop-types"

//List results from different API's in their containers
const ResultsList = props => (
  <li>
    <div style={{ margin: 5, paddingBottom: 3, borderBottom: "solid 1px #e0e0e0"}}>
      <h5 style={{paddingLeft: 15}}>{props.title}</h5>
      <button className="btn btn-danger " onClick={() => props.handleUrl(props.id)}>Get Info</button>
    <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Add to Itinerary</button>
    </div>
  </li> 
  
);

ResultsList.propTypes = {
  id: PropTypes.node,
  title: PropTypes.node,
  url: PropTypes.node,
  handleUrl: PropTypes.func,
  handleSaveButton: PropTypes.func,
  _id: PropTypes.node
}

export default ResultsList;