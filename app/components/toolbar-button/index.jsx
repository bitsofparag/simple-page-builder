import React, {PropTypes} from 'react';

import getStyles from './styles';

const ToolbarButton = ({type, onClick}, {theme}) => {
  const styles = getStyles(theme);

  return (<a onClick={onClick} style={styles.block} href='#'>{type}</a>);
};

ToolbarButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func
};

ToolbarButton.contextTypes = {
  theme: PropTypes.object
};

export default ToolbarButton;