// app libs
import React from 'react';
import ReactDOM from 'react-dom';

// app stores
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import storeReducers from './stores';

// app actions
import {addPage} from './actions';

// component views
import Header from './components/header';
import ToolbarContainer from './components/toolbar-container';
import Canvas from './components/canvas'
import NewPageButton from './components/new-page-button'
import ExportButton from './components/export-button';

// style libs
import getStyles from './appStyles';
import theme from './theme';

// initialize the product builder data store
const store = createStore(storeReducers);

// initialize the app styles
const styles = getStyles(theme);


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={styles.block}>
      <Header theme={theme} />
      <div style={styles.__leftSidebar}>
        <NewPageButton theme={theme} />
        <ToolbarContainer theme={theme} />
      </div>
      <div style={styles.__mainContent}>
        <ExportButton theme={theme} />
        <Canvas theme={theme} />
      </div>
    </div>);
  }
}

// render the root product builder component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// dispatch action to create a new page in the store (which is the currently displayed page)
store.dispatch(addPage());

 //setInterval(function() {
 // console.log(store.getState());
 //}, 2000);
