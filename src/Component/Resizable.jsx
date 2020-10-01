import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from './Table';
import Map from './Map';
import { Resizable } from 're-resizable';

const useStyles = makeStyles((theme) => ({}));

const STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const VERTICAL_OPTIONS = {
  top: true,
  bottom: true,
};
const HORIZONTAL_OPTIONS = {
  left: true,
  right: true,
};
export default function CustomDrawer() {
  const classes = useStyles();
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
        enable={HORIZONTAL_OPTIONS || VERTICAL_OPTIONS}
      >
        <Table />
      </Resizable>
      <div>
        <Map />
      </div>
    </div>
  );
}
