import React from "react";
import Map2 from "../Map";

export default class MapContainer extends React.Component {

	render() {
		return (
			<Map2
                center={this.props.center}
                restaurants={this.props.restaurants}
                events={this.props.events}
				places={this.props.places}
				parks={this.props.parks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `940px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}