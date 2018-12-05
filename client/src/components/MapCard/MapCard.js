import React from 'react';
import PropTypes from "prop-types"

//Cards for each marker when clicked
const MapCard = (props) => (
    <div className="card">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
        <a href={props.url} target="#"><button className="btn btn-primary">Link</button></a>
        </div>
    </div>

);

MapCard.propTypes = {
name: PropTypes.node,
url: PropTypes.node

}

export default MapCard