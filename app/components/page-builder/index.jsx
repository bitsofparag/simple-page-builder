import React, {Component, PropTypes} from 'react';

// component views
import NewPageButton from '../new-page-button';
import ToolbarContainer from './../../containers/toolbar';
import ExportButton from '../export-button';

// style libs
import getStyles from './styles';

let PageBuilder = (props, {theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <div style={styles.__leftSidebar}>
      <NewPageButton />
      <ToolbarContainer />
    </div>
    <div style={styles.__mainContent}>
      <ExportButton />
      {this.props.children}
    </div>
  </div>);
};

export default PageBuilder;