import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Table from './Table';
import Map from './Map';

export const defaultDrawerWidth = '50%';
const minDrawerWidth = 500;

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  dragger: {
    width: '5px',
    cursor: 'ew-resize',
    padding: '4px 0 0',
    borderTop: '1px solid #ddd',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: '#f4f7f9',
  },
}));

export default function CustomDrawer() {
  const classes = useStyles();
  const [drawerWidth, setDrawerWidth] = React.useState(defaultDrawerWidth);

  const handleMouseDown = (e) => {
    document.addEventListener('mouseup', handleMouseUp, true);
    document.addEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp, true);
    document.removeEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseMove = useCallback((e) => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minDrawerWidth) {
      setDrawerWidth(newWidth);
    }
  }, []);

  return (
    <>
      <div>
        <Drawer className={classes.drawer} variant="permanent" PaperProps={{ style: { width: drawerWidth } }}>
          <div className={classes.toolbar} />
          <div onMouseDown={(e) => handleMouseDown(e)} className={classes.dragger} />
          <Table />
        </Drawer>
        
      </div>
      <Map />
    </>
  );
}
