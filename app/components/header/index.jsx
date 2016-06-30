import React, {PropTypes} from 'react';

import getStyles from './styles';

const Header = (props, {theme}) => {
  const styles = getStyles(theme); // styles not cached

  return (<div style={styles.block}>
    Product Builder
  </div>);
};

Header.contextTypes = {
  theme: PropTypes.object
};

export default Header;