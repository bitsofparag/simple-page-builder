// app stores
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import storeReducer from './storeReducer';

// initialize the store from the reducers (the entire ProductBuilder store)
const store = createStore(storeReducer);

export default store;