// app stores
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// reducers
import elements from './elements';
import pages from './pages';

const storeReducer = combineReducers({
  pages,
  elements
});

// initialize the store from the reducers (the entire application store)
const store = createStore(storeReducer);

export default store;