/**
 * This file contains redux action creators
 */

const actionTypes = {
  ADD_ELEMENT: 'ADD_ELEMENT',
  ADD_PAGE: 'ADD_PAGE'
};

let elementId = 0;
let pageId = 0;

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
    id: `page${++pageId}`,
    page
  };
};
