/**
 * This file contains redux action creators
 */

import actionTypes from './actionTypes';

import element from '../components/element';

function generateElementId() {
  return `pageId`;
}

export const addElement = (type) => {
  console.log('adding element ', type);
  return {
    type: actionTypes.ADD_ELEMENT,
    element: Object.assign(element(type), {
      id: generateElementId()
    })
  };
};


export const addPage = (page) => {
  console.log('calling new page action to add id', page);
  return {
    type: actionTypes.ADD_PAGE,
    page: Object.assign({}, page, {
      id: generateElementId()
    })
  };
};
