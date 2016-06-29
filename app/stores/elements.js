/**
 * Elements store - a collection of reducers that manage elements data
 */

import actionTypes from '../actions/actionTypes';

export const elements = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:
      let newElement = Object.assign({}, action.element, {
        id: action.id
      });

      return [
        ...state,
        newElement
      ];

    default:
      return state;
  }
};