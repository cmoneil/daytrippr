import React from "react";
import Map2 from "../Map";

export default class MapContainer extends React.Component {

	render() {
		return (
			<Map2
                restaurants={this.props.restaurants}
                location={this.props.location}
                places={this.props.places}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `940px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}