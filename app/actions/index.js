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

/**
 *
 * @param element
 * @returns {{type: string, element: *}}
 */
export const addElement = (element) => {
  return {
    type: actionTypes.ADD_ELEMENT,
    element: Object.assign({}, element, {
      id: generateElementId()
    })
  };
};


/**
 *
 * @param page
 * @returns {{type: string, page: *}}
 */
export const newPage = (page) => {
  return {
    type: actionTypes.NEW_PAGE,
    page
  };
};


/**
 *
 * @param page
 * @returns {{type: string, page: *}}
 */
export const addPage = (page) => {
  return {
    type: actionTypes.ADD_PAGE,
    page: Object.assign({}, page, {
      id: generatePageId()
    })
  };
};


/**
 *
 * @param currentPage
 * @returns {{type: string, page: *}}
 */
export const savePage = (currentPage) => {
  let payload = Object.assign({}, currentPage);

  if (!currentPage.id) {
    payload = Object.assign(payload, {
      id: generatePageId()
    });
  }

  return {
    type: actionTypes.SAVE_PAGE,
    page: payload
  };
};
