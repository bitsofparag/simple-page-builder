import React, {PropTypes} from 'react';

import getStyles from './styles';

const Canvas = ({theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>

  </div>);
};

Canvas.propTypes = {
  theme: PropTypes.object
};

export default Canvas;