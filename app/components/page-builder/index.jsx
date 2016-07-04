import React, {Component, PropTypes} from 'react';

// component views
import NewPageButton from '../new-page-button';
import ToolbarContainer from './../../containers/toolbar';
import ExportButton from '../export-button';
import Canvas from '../canvas';

// style libs
import getStyles from './styles';

let PageBuilder = (props, {theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <div style={styles.__leftSidebar}>
      <NewPageButton theme={theme} {...props} />
      <ToolbarContainer theme={theme} currentPageId={props.page.id} />
    </div>
    <div style={styles.__mainContent}>
      <ExportButton theme={theme} {...props} />
      <Canvas theme={theme} {...props} />
    </div>
  </div>);
};

PageBuilder.propTypes = {
  page: PropTypes.object
};

PageBuilder.contextTypes = {
  theme: PropTypes.object
};

export default PageBuilder;