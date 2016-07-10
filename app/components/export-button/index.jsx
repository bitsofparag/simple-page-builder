import React, {PropTypes} from 'react';

import Button from '../button';

import getStyles from './styles';

const ExportButton = ({theme}) => {
  const styles = getStyles(theme); // styles can be cached

  return (<Button href='#' style={styles.block}>
    Export as...
  </Button>);
};

export default ExportButton;