import React, {PropTypes} from 'react';

import getStyles from './styles';

const PageTitle = ({title, theme}) => {

  return (<div style={styles.block}>
    {title}
  </div>);
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default PageTitle;