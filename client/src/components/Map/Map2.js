import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import RestMarkers from "../RestMarkers";

const Map2 = withScriptjs(withGoogleMap((props) =>{

  const markers = props.places.map( (places, idx) => <RestMarkers
                    key={places.id}
                    name ={places.name}
                    location={{lat: places.geometry.location.lat, lng: places.geometry.location.lng}}
                  />);
  // const markers = (<RestMarkers
  //                   key= {"cfca1428845447baefc4dd0c1cb5fe8f0395c125"}
  //                   name= {"Mill City Museum"}
  //                   location = {{lat: 44.97881090000001, lng: -93.2571825}}
  //                   />)
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  44.986656, lng: -93.258133 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default Map2;