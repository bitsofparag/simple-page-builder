import React, {Component, PropTypes} from 'react';

// component views
import Header from '../header';
import ToolbarContainer from '../toolbar-container';
import PageContainer from '../page-container';
import NewPageButton from '../new-page-button';
import ExportButton from '../export-button';

// style libs
import getStyles from './styles';
import theme from './theme';

const styles = getStyles(theme);

class Root extends Component {
  getChildContext() {
    return { theme }
  }

  render() {
    return (<div style={styles.block}>
      <Header />
      <div style={styles.__leftSidebar}>
        <NewPageButton />
        <ToolbarContainer />
      </div>
      <div style={styles.__mainContent}>
        <ExportButton />
        {this.props.children}
      </div>
    </div>);
  }

}

// NOTE: not a recommended approach; only to be used for `theme`
Root.childContextTypes = {
  theme: PropTypes.object
};

export default Root;