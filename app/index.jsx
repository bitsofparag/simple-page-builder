// app libs
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// get all components to be rendered
import Root from './components/root';
import Welcome from './components/welcome';
import PageContainer from './components/page-container';

// get store (for the entire app)
import store from './stores/configureStore';
//
store.subscribe((state) => {
  console.log('WOAH! state changed', store.getState());
});

// render the root product builder component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Root} path='/'>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path='pages/(:id)' component={PageContainer}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

 //setInterval(function() {
 // console.log(store.getState());
 //}, 2000);
