import React, {PropTypes} from 'react';

import getStyles from './styles';

const ExportButton = (props, {theme}) => {
  const styles = getStyles(theme); // styles can be cached

  return (<a style={styles.block}>
    Export as file
  </a>);
};

ExportButton.contextTypes = {
  theme: PropTypes.object
};

export default ExportButton;