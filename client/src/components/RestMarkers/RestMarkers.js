import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import MapCard from "../MapCard"
// import StethoscopeIcon from "../stethoscopeIcon.png";

export default class RestMarker extends React.Component {

  state = {
    isOpen: false,
    activeMarker: this.props.activeMarker
  }

  toggleOpen= (e) => {
    console.log(this.state.isOpen)
    this.setState({isOpen: !this.state.isOpen}, () =>{
      console.log(this.state.isOpen)
      console.log(this.state.activeMarker)
      if (this.state.isOpen){
        this.setState({activeMarker: true}, () => {
          console.log(this.state.activeMarker)
          // this.props.closeMarkers(null)
        })
      } else{
        // this.props.closeMarkers(this.props.id)
        console.log('close')
      }
    }
    
     )
  }
  componentWillReceiveProps(nextProps){
    this.setState({activeMarker: nextProps.activeMarker})
  }

   


    
  

  render(){
    return(
        <Marker
          onClick={()=>this.toggleOpen(this.props.name)}
          position={this.props.location}
          icon={this.props.icon}
        >
        { this.state.isOpen && this.state.activeMarker ?
          <InfoWindow maxWidth={800} defaultPosition={ this.props.location } onCloseClick={this.toggleOpen}>
          <MapCard name={this.props.name}
                  url={this.props.url}
                  />
          </InfoWindow> : null
        }
        </Marker>
    );
  }
}
