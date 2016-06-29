/**
 * This file contains redux action creators
 */

import actionTypes from './actionTypes';

// NOTE: these can be set with an API call to a service or backend
let elementId = 0;
let pageId = 0;
let currentPageId = pageId;

export const addElement = (element) => {
  return {
    type: actionTypes.ADD_ELEMENT,
    id: `element${++elementId}`,
    element
  };
};


export const addPage = (page) => {
  return {
    type: actionTypes.ADD_PAGE,
    id: `page${++currentPageId}`,
    page
  };
};

export const getCurrentPage = () => {
  return {
    type: actionTypes.GET_CURRENT_PAGE,
    currentPageId: currentPageId
  };
};