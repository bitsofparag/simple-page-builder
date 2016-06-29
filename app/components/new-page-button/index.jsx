import React, {PropTypes} from 'react';

import getStyles from './styles';

const NewPageButton = ({theme}) => {
  const styles = getStyles(theme);

  return (<a style={styles.block}>
    New page
  </a>);
};

NewPageButton.propTypes = {
  theme: PropTypes.object
};

export default NewPageButton;