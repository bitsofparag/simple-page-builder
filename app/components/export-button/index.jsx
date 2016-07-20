import React, {PropTypes} from 'react';

import Button from '../button';

import getStyles from './styles';

const ExportButton = (props, {theme}) => {
  const styles = getStyles(theme); // styles can be cached

  return (<Button href='#' style={styles.block}>
    Export as...
  </Button>);
};

ExportButton.contextTypes = {
  theme: PropTypes.object
};

export default ExportButton;