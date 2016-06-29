import React, {PropTypes} from 'react';

import getStyles from './styles';

const Element = ({theme, type}) => {
  const styles = getStyles(theme);

  return (<a style={styles.block} href='#'>
    {type}
  </a>);
};

Element.propTypes = {
  theme: PropTypes.object
};

export default Element;