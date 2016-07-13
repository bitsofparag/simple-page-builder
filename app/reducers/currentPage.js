/**
 * CurrentPage store - the current page
 */

import actionTypes from '../actions/actionTypes';

const currentPage = (state = {}, action) => {

  switch (action.type) {
    // add a new page to the pages array/state

    case actionTypes.ADD_ELEMENT:
      let newState = Object.assign({}, state);
      newState.elements.push(action.element.id);
      return newState;

    case actionTypes.NEW_PAGE:
      return Object.assign({}, action.page);
    default:
      return state;
  }
};

export default currentPage;