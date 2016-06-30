/**
 * Keys store
 */

import actionTypes from '../actions/actionTypes';

let defaultState = {
  currentPageId: 0,
  lastElementId: 0
};

export default function keys(state = defaultState, action) {
  if (action.type === actionTypes.ADD_PAGE) {
    return Object.assign({}, state, {
      currentPageId: state.currentPageId + 1
    });
  }

  if (action.type === actionTypes.ADD_ELEMENT) {
    return Object.assign({}, state, {
      lastElementId: state.lastElementId + 1
    });
  }
}