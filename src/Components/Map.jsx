import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

class Map extends Component {
  render() {
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={12}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </LeafletMap>
    );
  }
}

export default Map