import React from 'react';

const MapCard = (props) => (
    <div className="card">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
        <a href={props.url} target="#"><button className="btn btn-primary">Link</button></a>
        </div>
    </div>

);

export default MapCard