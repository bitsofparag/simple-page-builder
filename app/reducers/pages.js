/**
 * Pages store - a collection of reducers that manage page data
 */

import actionTypes from '../actions/actionTypes';

const pages = (state = [], action) => {
  switch (action.type) {
    // add a new page to the pages array/state
    case actionTypes.ADD_PAGE:

      console.log('adding page in store', action.type, action.page)
      return [
        ...state,
        action.page
      ];

    case actionTypes.GET_PAGE:
      return state.find((page) => page.id === action.pageId);

    case actionTypes.ADD_ELEMENT:
      let index = 1;
      let currentPage = Object.assign({}, state[index]);
      currentPage.elements.push(action.element.id);

      return [
        ...state.slice(0, index),
        currentPage,
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
};

export default pages;