import React, { Component } from 'react';
import Resizable from '../Component/Resizable';

class LeafleatTable extends Component {
  renderComponentTableMap = (options = {}) => {
    const { type = 'resizable' } = this.props;
    switch (type) {
      case 'resizable':
        return <Resizable {...options}/>;
      case 'accordion':
        return 'hello'
      default:
        break;
    }
  };
  render() {
    return this.renderComponentTableMap();
  }
}

export default LeafleatTable;
