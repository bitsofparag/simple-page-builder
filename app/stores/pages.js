/**
 * Pages store - a collection of reducers that manage page data
 */
import {keys, generatePageId} from './keys';
import actionTypes from '../actions/actionTypes';

let defaultPage = {
  title: 'New page title',
  elements: []
};

const pages = (state = [], action) => {
  switch (action.type) {
    // add a new page to the pages array/state
    case actionTypes.ADD_PAGE:
      let newPage = action.page;
      if (!action.page.title) {
        newPage = Object.assign(newPage, defaultPage);
      }

      return [
        ...state,
        newPage
      ];

    case actionTypes.ADD_ELEMENT:
      let pageKeys = keys('page');
      let index = pageKeys.currentOrder - 1;
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