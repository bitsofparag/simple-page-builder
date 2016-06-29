import React, {PropTypes} from 'react';

import getStyles from './styles';

const SavePageButton = ({theme}) => {
  const styles = getStyles(theme);

  return (<button style={styles.block}>
    Save page
  </button>);
};

SavePageButton.propTypes = {
  theme: PropTypes.object
};

export default SavePageButton;