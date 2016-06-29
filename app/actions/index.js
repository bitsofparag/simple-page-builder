/**
 * This file contains redux action creators
 */

import actionTypes from './actionTypes';

import * as keysStore from '../stores/keys';

export const addElement = (element) => {
  return {
    type: actionTypes.ADD_ELEMENT,
    element: Object.assign(element, {
      id: keysStore.generateElementId()
    })
  };
};


export const addPage = (page) => {
  return {
    type: actionTypes.ADD_PAGE,
    page: Object.assign(page || {}, {
      id: keysStore.generatePageId()
    })
  };
};
