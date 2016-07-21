import React, {PropTypes} from 'react';

import Button from '../button';

import getStyles from './styles';

const NewPageButton = ({pages, handleNewPage}, {theme}) => {
  const numOfPages = pages.length + 1;
  const styles = getStyles({theme, numOfPages});

  return (<Button
    style={styles.block}
    onClick={handleNewPage}
    activeStyle={styles.block_active}>
    +
  </Button>);
};

NewPageButton.propTypes = {
  pages: PropTypes.array,
  handleNewPage: PropTypes.func
};

NewPageButton.contextTypes = {
  theme: PropTypes.object
};

export default NewPageButton;