import React, {PropTypes} from 'react';

import Button from '../button';

import getStyles from './styles';

const SavePageButton = ({handleSavePage, currentPage}, {theme}) => {
  const styles = getStyles(theme);
  let action = '/pages/new';
  let method = 'POST';

  if (currentPage.id) {
    action = '/pages/' + currentPage.id;
    method = 'PUT';
  }

  return (<form action={action} onSubmit={handleSavePage} method={method}>
    <input
      value='Save'
      type='submit'
      style={styles.block}
      activeStyle={styles.block_active} />
  </form>);
};

SavePageButton.propTypes = {
  currentPage: PropTypes.object,
  handleSavePage: PropTypes.func
};

SavePageButton.contextTypes = {
  theme: PropTypes.object
};

export default SavePageButton;