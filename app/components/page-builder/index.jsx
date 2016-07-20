import React, {Component, PropTypes} from 'react';

// component views
import NewPageButton from '../new-page-button';
import ToolbarContainer from '../../containers/toolbar-container';
import ExportButton from '../export-button';
import Canvas from '../canvas';
import SavePageButton from '../save-page-button';

// style libs
import getStyles from './styles';

let PageBuilder = (props, {theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <div style={styles.__toolbar}>
      <ToolbarContainer currentPageId={props.currentPage.id} />
      <NewPageButton
        pages={props.pages}
      />
      <SavePageButton handleSavePage={props.handleSavePage} />
      <ExportButton {...props} />
    </div>
    <div style={styles.__mainContent}>
      <Canvas
        theme={theme}
        page={props.currentPage}
        elements={props.elements}
      />
    </div>
  </div>);
};

PageBuilder.propTypes = {
  pages: PropTypes.array,
  elements: PropTypes.array,
  currentPage: PropTypes.object
};

PageBuilder.contextTypes = {
  theme: PropTypes.object
};

export default PageBuilder;