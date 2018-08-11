import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Markers from "../Markers"
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 44.986656, lng: -93.258133 },
    zoom: 11
  }
render() {
    return (
      <div className='google-map'style={{width: 950, height: 600}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo"}}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          >
          <Markers lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        </GoogleMapReact>
      </div>
    )
  }
}


export default Map;
