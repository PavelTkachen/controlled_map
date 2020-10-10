import React from 'react';

import Table from '../Components/Table';
import Map from '../Components/Map';
import { Resizable } from 're-resizable';

const RESIZABLE_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const HORIZONTAL_OPTIONS = {
  left: true,
  right: true,
};

const CONTAINER_STYLE = {
  width: '100%',
  display: 'flex',
  overflow: 'hidden',
}

const DEFAULT_SIZE = {
  width: '40%',
  height: '100%',
}
class CustomDrawer extends React.Component {
  state = {
    isVisible: true
  }
  changeMapVisible = (value) => {
    this.setState({
      isVisible: value
    })
  }
  render() {
    return (
      <div style={CONTAINER_STYLE}>
        <Table mapVisible={this.changeMapVisible} isVisible={this.state.isVisible}/>
        {this.state.isVisible && 
          <Resizable
            style={RESIZABLE_STYLE}
            defaultSize={DEFAULT_SIZE}
            maxWidth="40%"
            minWidth="20%"
            enable={HORIZONTAL_OPTIONS}
          >
            <Map />
          </Resizable>
        }
        
      </div>
    );
  }
}

export default CustomDrawer;
