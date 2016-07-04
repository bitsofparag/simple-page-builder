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

    case actionTypes.ADD_ELEMENT:
      let index = action.currentPageId - 1;
      console.log('adding element in page', state, action.element.id, index)
      let currentPage = Object.assign({}, state[index]);
      currentPage.elements.push(action.element.id);

      return [
        ...state.slice(0, index + 1),
        currentPage,
        ...state.slice(index + 2)
      ];

    default:
      return state;
  }
};

export default pages;