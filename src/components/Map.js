import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 40.71427,
      lng: -74.00597
    },
    zoom: 15
  };

  render() {
    return (
      // set the container height explicitly
      <div style={{ flex: '0 0 35rem' }}>
      <div className="" style={{ height: '250px', width: '100%', position: 'center', top: '25px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyAmTuAX-MqRaEhM_z1ZlTPcUHul78S6nXs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
        <MapMarker
        lat={40.71427}
        lng={-74.00597}
        />
        </GoogleMapReact>
      </div>
      </div>
    )
  }
  
}

export default Map;
