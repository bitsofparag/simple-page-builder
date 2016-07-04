import React, {PropTypes} from 'react';

import getStyles from './styles';

const ExportButton = ({theme}) => {
  const styles = getStyles(theme); // styles can be cached

  return (<a style={styles.block}>
    Export as file
  </a>);
};

export default ExportButton;