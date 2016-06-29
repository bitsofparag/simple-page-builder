import React from 'react';
import {connect} from 'react-redux';

import ToolbarButton from '../toolbar-button';
import element from '../element';

import {addElement} from '../../actions';

import getStyles from './styles';

const styles = getStyles();

const elementTypes = ['input', 'textarea', 'p', 'file', 'radio'];

let ToolbarContainer = ({theme, onClick}) => {
  return (<div style={styles.block}>
    {elementTypes.map(type =>
      <ToolbarButton
        key={type}
        type={type}
        theme={theme}
        onClick={onClick(type)} />
    )}
  </div>);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (type) => {
      return (event) => {
        event.preventDefault();
        let addElementAction = addElement(element(type));
        dispatch(addElementAction);
      };
    }
  }
};

ToolbarContainer = connect(null, mapDispatchToProps)(ToolbarContainer);

export default ToolbarContainer;