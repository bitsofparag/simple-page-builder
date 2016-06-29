import React, {PropTypes} from 'react';

import getStyles from './styles';

const ExportButton = ({theme}) => {
  const styles = getStyles(theme);

  return (<a style={styles.block}>
    Export as file
  </a>);
};

ExportButton.propTypes = {
  theme: PropTypes.object
};

export default ExportButton;