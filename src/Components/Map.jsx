import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MARKERS = [
  {
    title:'Саратов',
    position: [51.5406, 46.0086],
    description: 'Город на Волге'
  },
  {
    title:'Энгельс',
    position: [51.4839, 46.1053],
    description: 'Рядом с Саратовом'
  },
  {
    title:'Волгоград',
    position: [48.7194, 44.5018],
    description: 'Недалеко от Саратова, но дальше чем Энгельс'
  },
];

class Map extends Component {
  getMarkers = () => {
    return MARKERS.map((value) => (
      <Marker position={value.position}>
        <Popup>
          <div>Название: <span>{value.title}</span></div>
          <div>Описание: <span>{value.description}</span></div>
        </Popup>
      </Marker>
    ))
  }
  render() {
    return (
      <LeafletMap
        center={[51.5406, 46.0086]}
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
        {this.getMarkers()}
      </LeafletMap>
    );
  }

}

export default Map