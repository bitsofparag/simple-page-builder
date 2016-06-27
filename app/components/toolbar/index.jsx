import React from 'react';

import getStyles from './styles.js';

const styles = getStyles();

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (<div style={styles.block}>
      Toolbar
    </div>);
  }
}