import React, {PropTypes} from 'react';

import getStyles from './styles';

const PageTitle = ({theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    Page Title
  </div>);
};

PageTitle.propTypes = {
  theme: PropTypes.object
};

export default PageTitle;