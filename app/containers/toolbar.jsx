import React, {Component} from 'react';
import {connect} from 'react-redux';

import ToolbarButton from '../components/toolbar-button';

import {addElement} from '../actions';

import {getElementTypes} from '../components/element';

class ToolbarContainer extends Component {
  render() {
    let {onClick} = this.props;

    return (<div>
      {getElementTypes().map(type =>
        <ToolbarButton
          key={type}
          type={type}
          onClick={onClick(type)} />
      )}
    </div>);
  }
}

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