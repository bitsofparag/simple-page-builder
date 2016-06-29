/**
 * Main application store
 */

import { combineReducers } from 'redux';
import elements from './elements';
import pages from './pages';

const productBuilderStore = combineReducers({
  pages,
  elements
});

export default productBuilderStore;