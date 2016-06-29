import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';

import getStyles from './styles';

const Canvas = ({theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <PageTitle theme={theme} />
  </div>);
};

Canvas.propTypes = {
  theme: PropTypes.object
};

export default Canvas;