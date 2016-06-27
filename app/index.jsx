import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from './toolbar';

import getStyles from './appStyles';

const styles = getStyles();

const App = React.createClass({
  render() {
    return (<div style={styles.block}>
      <div style={styles.__leftSidebar}>
        <Toolbar />
      </div>
      <div style={styles.__mainContent}></div>
    </div>);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));