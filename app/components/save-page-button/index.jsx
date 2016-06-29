import React, {PropTypes} from 'react';

import getStyles from './styles';

const SavePageButton = ({theme}) => {
  const styles = getStyles(theme);

  return (<a style={styles.block}>
    New page
  </a>);
};

SavePageButton.propTypes = {
  theme: PropTypes.object
};

export default SavePageButton;