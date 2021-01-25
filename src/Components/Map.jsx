import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

const { Overlay } = LayersControl;

const DEFAULT_POSITION = [51.5406, 46.0086];
const DEFAULT_ZOOM = 12;
const ALL_MARKS = true;
class Map extends Component {
  selectTableRow = (value) => {
    const { onSelectedObject } = this.props;
    onSelectedObject(value);
  };

  getMarker = (selectedObject, flag, index) => {
    return (
      <Marker
        onCLick={flag ? () => this.selectTableRow(index) : null}
        key={selectedObject?.id}
        position={selectedObject?.position}
      >
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
  getMarkers = (data, flag) => {
    return data.map((value, index) => this.getMarker(value, flag, index));
  };
  render() {
    const { selectedRowIndex, options } = this.props;
    return (
      <LeafletMap
        center={options.data[selectedRowIndex]?.position || DEFAULT_POSITION}
        zoom={DEFAULT_ZOOM}
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
        {selectedRowIndex !== null && this.getMarker(options.data[selectedRowIndex])}
        <LayersControl>
          <Overlay name="Объекты">
            <LayerGroup>
              <MarkerClusterGroup
                spiderLegPolylineOptions={{
                  weight: 0,
                  opacity: 0,
                }}
              >
                {this.getMarkers(options.data.filter((index) => index !== selectedRowIndex), ALL_MARKS)}
              </MarkerClusterGroup>
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </LeafletMap>
    );
  }
}
export default Map;
