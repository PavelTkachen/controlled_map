import React, { Component } from 'react';
import Container from './Container/LeafleatTable';
import './App.css';
import { MapAction } from './Components/TableActions';
import { MAP_OPTIONS, DATA } from './common/fakeData';

const COLUMNS = [
  {
    name: 'id',
    label: 'ID',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'country',
    label: 'Страна',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'city',
    label: 'Город',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'position',
    label: 'Местоположение',
    options: {
      filter: true,
      sort: true,
    },
  },
];

class App extends Component {
  state = {
    mapVisible: true,
  };
  enabledMap = () => {
    this.setState({
      mapVisible: !this.state.mapVisible,
    });
  };
  options = {
    disableToolbarSelect: true,
    selectableRows: 'single',
    selectableRowsOnClick: true,
    customToolbar: () => (
      <React.Fragment>
        <MapAction title="Карта" onClick={this.enabledMap} />
      </React.Fragment>
    ),
  };
  render() {
    return (
      <div className="App">
        <Container
          options={{
            tableOptions: { columns: COLUMNS, data: DATA, options: this.options, title: 'Адреса' },
            mapOptions: MAP_OPTIONS,
            enabledMap: this.state.mapVisible,
          }}
        />
      </div>
    );
  }
}

export default App;
