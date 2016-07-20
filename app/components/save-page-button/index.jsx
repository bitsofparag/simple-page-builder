import React, {PropTypes} from 'react';

import Button from '../button';

import getStyles from './styles';

const SavePageButton = ({handleSavePage}, {theme}) => {
  const styles = getStyles(theme);

  return (<Button
    style={styles.block}
    onClick={handleSavePage}
    activeStyle={styles.block_active}>
    Save
  </Button>);
};

SavePageButton.propTypes = {
  pages: PropTypes.array,
  handleSavePage: PropTypes.func
};

SavePageButton.contextTypes = {
  theme: PropTypes.object
};

export default SavePageButton;