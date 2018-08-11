import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import RestMarkers from "../RestMarkers";

const Map2 = withScriptjs(withGoogleMap((props) =>{

  // const markers = props.restaurants.map( restaurants => <RestMarkers
  //                   key={restaurants.id}
  //                   name ={restaurants.name}
  //                   location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
  //                 />);
  const markers = (<RestMarkers
                    key= {12}
                    name= {"me"}
                    location = {{lat: 44.975918, lng: -93.273079}}
                    />)
                  
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