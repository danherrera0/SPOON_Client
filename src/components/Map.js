import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

// const MapMarker = ({ text }) => (
//   <div style={{
//     color: 'white',
//     background: 'grey',
//     padding: '15px 15px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}>
//     {text}
//   </div>
// );
class Map extends Component {


  static defaultProps = {
    center: {
      // lat: this.props.latitude,
      // lng: this.props.longitude,
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
          defaultZoom={this.props.zoom}
        >
        <MapMarker
      
        />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default Map;
