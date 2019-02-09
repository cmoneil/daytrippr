import React from "react";
import Map from "../Map";
import PropTypes from "prop-types"

export default class MapContainer extends React.Component {

	render() {
		return (
			<Map
				userLocation={this.props.userLocation}
				center={this.props.center}
				restaurants={this.props.restaurants}
				events={this.props.events}
				places={this.props.places}
				parks={this.props.parks}
				itin={this.props.itin}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

MapContainer.propTypes = {
	center: PropTypes.object,
	restaurants: PropTypes.array,
	events: PropTypes.array,
	location: PropTypes.node,
	places: PropTypes.array,
	parks: PropTypes.array,
	itin: PropTypes.array,
	userLocation: PropTypes.node
}