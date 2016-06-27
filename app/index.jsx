import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from './toolbar';

import getStyles from './appStyles';

const styles = getStyles();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={styles.block}>
      <div style={styles.__header}>
        Product Builder
      </div>
      <div style={styles.__leftSidebar}>
        <Toolbar />
      </div>
      <div style={styles.__mainContent}></div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));