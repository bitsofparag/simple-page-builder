import React, {PropTypes} from 'react';

import getStyles from './styles';

const Element = ({theme}) => {
  const styles = getStyles(theme);

  return (<a style={styles.block} href='#'>
    T
  </a>);
};

Element.propTypes = {
  theme: PropTypes.object
};

export default Element;