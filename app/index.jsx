// app libs
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// get all components to be rendered
import RootLayout from './components/root-layout';
import Welcome from './components/welcome';
import PageBuilderContainer from './containers/page-builder';

// get store (for the entire app)
import store from './reducers/configureStore';
//
store.subscribe((state) => {
  console.log('WOAH! state changed', store.getState());
});

function checkForApps({params}, replace) {
  if (params.pageId) {
    let pageId = params.pageId;
    store.dispatch()
  }
}

// render the root-layout product builder component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={RootLayout} onEnter={checkForApps}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path='pages/(:pageId)' component={PageBuilderContainer}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

 //setInterval(function() {
 // console.log(store.getState());
 //}, 2000);
