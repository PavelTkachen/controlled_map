import React, { Component } from 'react';
import Resizable from '../Component/Resizable';

class LeafleatTable extends Component {
  renderComponentTableMap = () => {
    const { type = 'resizable' } = this.props;
    switch (type) {
      case 'resizable':
        return <Resizable />;
      default:
        break;
    }
  };
  render() {
    return this.renderComponentTableMap();
  }
}

export default LeafleatTable;
