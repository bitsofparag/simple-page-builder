// app stores
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

// reducers
import elements from './elements';
import pages from './pages';


let middleWare;

if (process.env.MODE === 'development') {
  // 1. add logging middleware
  const logger = createLogger();
  middleWare = applyMiddleware(logger);
}

// initialize the store from the reducers (the entire application store)
const storeReducer = combineReducers({
  pages,
  elements
});

const store = createStore(storeReducer, middleWare);

export default store;