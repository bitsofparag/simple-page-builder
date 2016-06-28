import React, {PropTypes} from 'react';

import getStyles from './styles';

const Header = ({theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    Product Builder
  </div>);
};

Header.propTypes = {
  theme: PropTypes.object
};

export default Header;