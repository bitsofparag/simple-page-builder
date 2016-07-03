import { combineReducers } from 'redux';
import elements from './elements';
import pages from './pages';

const storeReducer = combineReducers({
  pages,
  elements
});

export default storeReducer;