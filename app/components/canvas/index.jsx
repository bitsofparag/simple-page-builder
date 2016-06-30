import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';

import getStyles from './styles';

let Canvas = ({elements, page}, {theme}) => {
  const styles = getStyles(theme);

  console.log('rendering in canvas page ->', page);
  return (<div style={styles.block}>
    <PageTitle title={page && page.title} />
  </div>);
};

Canvas.propTypes = {
  elements: PropTypes.array,
  pages: PropTypes.array
};

Canvas.contextTypes = {
  theme: PropTypes.object
}

export default Canvas;