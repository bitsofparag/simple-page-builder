import React from 'react';
import ReactDOM from 'react-dom';

// component views
import Header from './components/header';
import Toolbar from './components/toolbar';
import Canvas from './components/canvas'

// style libs
import getStyles from './appStyles';
import theme from './theme';

const styles = getStyles(theme);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={styles.block}>
      <Header theme={theme} />
      <div style={styles.__leftSidebar}>
        <Toolbar theme={theme} />
      </div>
      <div style={styles.__mainContent}>
        <Canvas theme={theme} />
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));