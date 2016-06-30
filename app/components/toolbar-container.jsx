import React from 'react';
import {connect} from 'react-redux';

import ToolbarButton from './toolbar-button';

import {addElement} from '../actions';

import {getElementTypes} from './element';

let ToolbarContainer = ({onClick}) => {
  return (<div>
    {getElementTypes().map(type =>
      <ToolbarButton
        key={type}
        type={type}
        onClick={onClick(type)} />
    )}
  </div>);
};

const mapDispatchToProps = (dispatch) => ({
  onClick(type) {
    return (event) => {
      event.preventDefault();
      dispatch(addElement(type));
    };
  }
});

ToolbarContainer = connect(null, mapDispatchToProps)(ToolbarContainer);

export default ToolbarContainer;