/**
 * Elements store - a collection of reducers that manage elements data
 */

import actionTypes from '../actions/actionTypes';

const elements = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:

      console.log('calling store in elements', action);

      return [
        ...state,
        action.element
      ];

    default:
      return state;
  }
};

export default elements;