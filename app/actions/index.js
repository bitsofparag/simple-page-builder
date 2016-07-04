/**
 * This file contains redux action creators
 */

import actionTypes from './actionTypes';

import element from '../components/element';

let pageCounter = 0;
let elementCounter = 0;

function generatePageId() {
  return ++pageCounter;
}

function generateElementId(pageId) {
  return pageId + '-' + (++elementCounter);
}

export const addElement = (type, currentPageId) => {
  console.log('adding element ', type);
  return {
    type: actionTypes.ADD_ELEMENT,
    currentPageId: currentPageId,
    element: Object.assign(element(type), {
      id: generateElementId(currentPageId)
    })
  };
};


export const addPage = (page) => {
  console.log('calling new page action to add id', page);
  return {
    type: actionTypes.ADD_PAGE,
    page: Object.assign({}, page, {
      id: generatePageId()
    })
  };
};
