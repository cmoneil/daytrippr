import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import RestMarkers from "../RestMarkers";
import PlaceIcon from "./icons/sculpture.png";
import EventIcon from "./icons/events.png";
import RestIcon from "./icons/rest.png"
import ParkIcon from "./icons/park.png"
import { join } from "path";

const Map2 = withScriptjs(withGoogleMap((props) =>{

  const placeMarkers = props.places.map( (places, idx) =>    <RestMarkers
      icon={PlaceIcon}
      key={places.id}
      id={places.id}
      url={places.url}
      name ={places.name}
      closeMarkers={props.closeOtherMarkers}
      toggleShowPage={props.toggleShowPage}
      location={{lat: places.geometry.location.lat, lng: places.geometry.location.lng}}
      activeMarker={places.id === props.activeMarker ? true : false}
    />
  );
  const parksMarkers = props.parks.map( (parks, idx) =>    <RestMarkers
      icon={ParkIcon}
      key={parks.id}
      id={parks.id}
      url={parks.url}
      name ={parks.name}
      closeMarkers={props.closeOtherMarkers}
      toggleShowPage={props.toggleShowPage}
      location={{lat: parks.geometry.location.lat, lng: parks.geometry.location.lng}}
      activeMarker={parks.id === props.activeMarker ? true : false}
    />
  );
        
  const eventMarkers = props.events.map( (events, idx) => 
    <RestMarkers
      icon={EventIcon}
      key={events.id}
      id={events.id}
      url={events.url}
      name ={events.name}
      closeMarkers={props.closeOtherMarkers}
      toggleShowPage={props.toggleShowPage}
      location={{lat: events.venue.location.lat, lng: events.venue.location.lon}}
      activeMarker={events.id === props.activeMarker ? true : false}
  />
  );
  const restMarkers = props.restaurants.map( (restaurants, idx) => {
    let restMarkers = <RestMarkers
      icon={RestIcon}
      key={restaurants.id}
      id={restaurants.id}
      url={restaurants.url}
      name ={restaurants.name}
      closeMarkers={props.closeOtherMarkers}
      toggleShowPage={props.toggleShowPage}
      location={{lat: restaurants.coordinates.latitude, lng: restaurants.coordinates.longitude}}
      activeMarker={restaurants.id === props.activeMarker ? true : false}
  />
  return restMarkers
  }
  );
        
         
  
                  
  return (
      <GoogleMap
        defaultZoom={15}
        center={ !props.center.lat ? {lat: 44.986656, lng:-93.258133} : props.center }
        >
        {placeMarkers}
        {eventMarkers}
        {restMarkers}
        {parksMarkers}
      </GoogleMap>
    );
  }
))

export default Map2;