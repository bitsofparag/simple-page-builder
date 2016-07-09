/**
 * Pages store - a collection of reducers that manage page data
 */

import actionTypes from '../actions/actionTypes';

const pages = (state = [], action) => {
  switch (action.type) {
    // add a new page to the pages array/state
    case actionTypes.ADD_PAGE:
      return [
        ...state,
        action.page
      ];

    default:
      return state;
  }
};

export default pages;