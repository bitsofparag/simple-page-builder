// app libs
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// get Root element
import Root from './components/root';

// get store (for the entire app)
import store from './stores/configureStore';
//
store.subscribe((state) => {
  console.log('WOAH! state changed', store.getState());
});

// render the root product builder component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);

 //setInterval(function() {
 // console.log(store.getState());
 //}, 2000);
