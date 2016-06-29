import React from 'react';

import ToolbarButton from '../toolbar-button';

import getStyles from './styles.js';

const styles = getStyles();

const elementTypes = ['input', 'textarea', 'p', 'file', 'radio'];

export default class ToolbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(type) {
    return (e) => {
      e.preventDefault();
      console.log('clicked', type);
    };
  }

  render() {
    return (<div style={styles.block}>
      {elementTypes.map(type =>
        <ToolbarButton {...this.props}
          key={type}
          type={type}
          onClick={this._handleClick(type)} />
      )}
    </div>);
  }
}