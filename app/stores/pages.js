/**
 * Pages store - a collection of reducers that manage page data
 */

import actionTypes from '../actions/actionTypes';

export const pages = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PAGE:
      let newPage = Object.assign({}, action.page, {
        id: action.id
      });

      return [
        ...state,
        newPage
      ];

    case actionTypes.ADD_ELEMENT:
      return state.map(page => {
        if (page.id === action.pageId) {
          page.elements.push(action.id);
        }
      });

    default:
      return state;
  }
};