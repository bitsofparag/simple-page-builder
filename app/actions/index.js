/**
 * This file contains redux action creators
 */

const actionTypes = {
  ADD_ELEMENT: 'ADD_ELEMENT'
};

let elementId = 0;

export const addElement = (element) => {
  return {
    type: actionTypes.ADD_ELEMENT,
    id: `element${++elementId}`,
    element
  }
};