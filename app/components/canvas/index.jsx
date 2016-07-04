import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';

import getStyles from './styles';

let Canvas = ({page, theme}) => {
  const styles = getStyles(theme);

  console.log('rendering in canvas page ->', page);
  return (<div style={styles.block}>
    <PageTitle title={page && page.title} />
  </div>);
};

Canvas.propTypes = {
  pages: PropTypes.array,
  theme: PropTypes.object
};

export default Canvas;