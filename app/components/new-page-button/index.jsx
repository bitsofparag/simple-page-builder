import React, {PropTypes} from 'react';

import getStyles from './styles';

const NewPageButton = ({theme}) => {
  const styles = getStyles(theme); // can be optimised by caching styles

  return (<a style={styles.block}>
    New page
  </a>);
};

export default NewPageButton;