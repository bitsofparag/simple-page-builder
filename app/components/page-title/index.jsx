import React, {PropTypes} from 'react';

import getStyles from './styles';

const PageTitle = ({title}, {theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    {title}
  </div>);
};

PageTitle.propTypes = {
  title: PropTypes.string
};

PageTitle.contextTypes = {
  theme: PropTypes.object
};

export default PageTitle;