import React, {PropTypes} from 'react';

import getStyles from './styles';

const ToolbarButton = ({theme, type, onClick}) => {
  const styles = getStyles(theme);

  return (<a onClick={onClick} style={styles.block} href='#'>{type}</a>);
};

ToolbarButton.propTypes = {
  theme: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ToolbarButton;