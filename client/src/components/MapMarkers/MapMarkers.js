import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import MapCard from "../MapCard"
import PropTypes from "prop-types"

export default class MapMarkers extends React.Component {

  state = {
    isOpen: false,
    activeMarker: this.props.activeMarker
  }

  //Toggles whether the map marker has been clicked
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.state.isOpen) {
        this.setState({ activeMarker: true }, () => {
        })
      } else {
        this.setState({ activeMarker: false }, () => {
        })
      }
    }
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ activeMarker: nextProps.activeMarker })
  }


  render() {
    return (
      <Marker
        onClick={() => this.toggleOpen(this.props.name)}
        position={this.props.location}
        icon={this.props.icon}
      >
        {this.state.isOpen && this.state.activeMarker ?
          <InfoWindow maxWidth={800} defaultPosition={this.props.location} onCloseClick={this.toggleOpen}>
            <MapCard name={this.props.name}
              url={this.props.url}
            />
          </InfoWindow> : null
        }
      </Marker>
    );
  }
}

MapMarkers.propTypes = {
  url: PropTypes.node,
  name: PropTypes.node,
  icon: PropTypes.node,
  activeMarker: PropTypes.bool,
  position: PropTypes.node,
  location: PropTypes.object
  
}
