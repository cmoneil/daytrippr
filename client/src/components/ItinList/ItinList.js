import React from "react"
import PropTypes from "prop-types"

//Itinerary results list
const ItinList = (props) => (
    <li>
        <div style={{ margin: 5, paddingBottom: 3, borderBottom: "solid 1px #e0e0e0" }}>
            <h5 style={{ paddingLeft: 15 }}>{props.title}</h5>
            {props.url ? <a href={props.url} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-danger ">Get Info</button>
            </a> : <button className="btn btn-danger " onClick={() => props.handleUrl(props.id)}>Get Info</button>}
            <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
        </div>
    </li>

);

ItinList.propTypes = {
    title: PropTypes.node,
    url: PropTypes.node,
    handleDeleteButton: PropTypes.func,
    _id: PropTypes.node,
    handleUrl: PropTypes.func,
    id: PropTypes.node
}

export default ItinList;