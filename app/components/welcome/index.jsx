import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

import Button from '../button';

import getStyles from './styles';

const Welcome = (props, {theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <div style={styles.__content}>
      <h2 style={styles.__title}>Let's create a simple web page</h2>
      <Button href='pages/new' style={styles.__button}>
        Get started
      </Button>
    </div>
    <div style={styles.__wrapper}></div>
  </div>);
};

Welcome.contextTypes = {
  theme: PropTypes.object
};


export default Welcome;