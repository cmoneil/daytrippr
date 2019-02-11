import React from 'react';
import PropTypes from "prop-types";
import axios from "axios"

const handleUrlMap = (props) => {
    // event.preventDefault();
    axios.post("/api/search/url-data",{
        id: props.placeId,
        location: props.userLocation
    })
    .then((response) => {
        let placeName = response.data.name
        let placeLocation = props.userLocation
        response.data.website ? window.open(response.data.website):
        window.open(`https://www.google.com/search?q=${placeName}+${placeLocation}`)
    })
    .catch(error => {
        console.log(error)
    })
}

//Cards for each marker when clicked
const MapCard = (props) => (
    <div className="card">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
            {props.url ?
                <a href={props.url} target="#"><button className="btn btn-primary">Link</button></a> : <button className="btn btn-primary" onClick={()=> handleUrlMap(props)}>Get Info</button>}
        </div>
    </div>

        );
        
MapCard.propTypes = {
            name: PropTypes.node,
        handleUrl: PropTypes.func,
        id: PropTypes.node,
        userLocation: PropTypes.node,
        placeId: PropTypes.node,
        url: PropTypes.node
        }
        
export default MapCard