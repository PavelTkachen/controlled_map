import React from 'react';
import Container from './Container/LeafleatTable'
import './App.css';

const COLUMNS = [
  {
   name: "name",
   label: "Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "company",
   label: "Company",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "city",
   label: "City",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "state",
   label: "State",
   options: {
    filter: true,
    sort: false,
   }
  },
];

const DATA = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const OPTIONS = {}

const TABLE_OPTIONS = {
  columns:COLUMNS,
  data:DATA,
  options:OPTIONS,
  title: 'Адреса'
}

const MAP_OPTIONS = {}

function App() {
  return (
    <div className="App">
      <Container options={{tableOptions: TABLE_OPTIONS, mapOptions:MAP_OPTIONS}}/>
    </div>
  );
}

export default App;
