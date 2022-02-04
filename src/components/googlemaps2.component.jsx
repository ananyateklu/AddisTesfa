import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./components.css";
require("dotenv").config();
// ...

export class MapContainer extends React.Component {
  render() {
    const style = {
      position: "absolute",
      zIndex: "0",
      width: "300px",
      height: "350px",
      top: "1200px",
      left: "30px",
      marginTop: "0",
      marginLeft: "0",
      borderRadius: "10px",
      border: "solid 2px brown",
    };

    return (
      <div className="MapComponent">
        <Map
          className="map"
          InfoWindow="googlemaps"
          google={this.props.google}
          zoom={14}
          style={style}
          initialCenter={{ lat: 44.9778, lng: -93.2650 }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
