import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

const { Overlay } = LayersControl;

const getMarker = (selectedObject) => {
  return (
    <Marker position={selectedObject.position}>
      <Popup>
        <div>
          Название: <span>{selectedObject.city}</span>
        </div>
        <div>
          Описание: <span>{selectedObject.description}</span>
        </div>
      </Popup>
    </Marker>
  );
};
const getMarkers = (data) => {
  return data.map((value) => (
    <Marker key={value.id} position={value.position}>
      <Popup>
        <div>
          Название: <span>{value.city}</span>
        </div>
        <div>
          Описание: <span>{value.description}</span>
        </div>
      </Popup>
    </Marker>
  ));
};
class Map extends Component {
  render() {
    const { selectedRowIndex, options } = this.props;
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
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedRowIndex !== null && getMarker(options.data[selectedRowIndex])}
        <LayersControl onbaselayerchange={(e) => console.log(e)}>
          <Overlay name="Объекты">
            <LayerGroup>
              <MarkerClusterGroup
                spiderLegPolylineOptions={{
                  weight: 0,
                  opacity: 0,
                }}
              >
                {getMarkers(options.data.filter((index) => index !== selectedRowIndex))}
              </MarkerClusterGroup>
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </LeafletMap>
    );
  }
}
export default Map;
