/**
 * This file contains redux action creators
 */

import actionTypes from './actionTypes';
import uuid from 'node-uuid';

let pageCounter = 0;

function generatePageId() {
  return ++pageCounter;
}

function generateElementId() {
  return uuid();
}

export const addElement = (element) => {
  return {
    type: actionTypes.ADD_ELEMENT,
    element: Object.assign({}, element, {
      id: generateElementId()
    })
  };
};

export const newPage = (page) => {
  return {
    type: actionTypes.NEW_PAGE,
    page
  };
};


export const addPage = (page) => {
  return {
    type: actionTypes.ADD_PAGE,
    page: Object.assign({}, page, {
      id: generatePageId()
    })
  };
};
