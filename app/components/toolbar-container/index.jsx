import React from 'react';

import Element from '../element';

import getStyles from './styles.js';

const styles = getStyles();

const elementTypes = ['input', 'textarea', 'p', 'file', 'radio'];

export default class ToolbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<div style={styles.block}>
      {elementTypes.map(type =>
        <Element key={type} {...this.props} type={type} />
      )}
    </div>);
  }
}