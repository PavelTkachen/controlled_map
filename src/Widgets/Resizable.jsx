import React from 'react';

import Table from '../Components/Table';
import Map from '../Components/Map';
import { Resizable } from 're-resizable';

const STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const HORIZONTAL_OPTIONS = {
  left: true,
  right: true,
};

export default function CustomDrawer() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Resizable
        style={STYLE}
        defaultSize={{
          width: '60%',
          height: '100%',
        }}
        maxWidth="80%"
        minWidth="55%"
        enable={HORIZONTAL_OPTIONS || false}
      >
        <Table />
      </Resizable>
      <Map />
    </div>
  );
}
