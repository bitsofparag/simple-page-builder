import React, {PropTypes} from 'react';

import getStyles from './styles';

const ToolbarButton = ({displayName, onClick}, {theme}) => {
  const styles = getStyles(theme);

  return (<a onClick={onClick} style={styles.block} href='#'>{displayName}</a>);
};

ToolbarButton.propTypes = {
  displayName: PropTypes.string,
  onClick: PropTypes.func
};

ToolbarButton.contextTypes = {
  theme: PropTypes.object
};

export default ToolbarButton;