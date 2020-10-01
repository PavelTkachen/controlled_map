import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

class Map extends Component {
  render() {
    return (
      <LeafletMap
        center={[50, 10]}
        zoom={12}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}

export default Map