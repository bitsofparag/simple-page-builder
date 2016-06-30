import { combineReducers } from 'redux';
import elements from './elements';
import pages from './pages';
import keys from './keys';

const storeReducer = combineReducers({
  pages,
  elements
});

export default storeReducer;