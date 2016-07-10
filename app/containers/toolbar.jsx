import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import Toolbar from '../components/toolbar';

import {addElement} from '../actions';

import element, {getElementTypes} from '../components/element-type';

class ToolbarContainer extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {

    return (<Toolbar onClick={this.props.onClick} />);
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick(type) {
    return (event) => {
      event.preventDefault();
      const elementData = element(type);
      dispatch(addElement(elementData));
    };
  }
});

ToolbarContainer = connect(null, mapDispatchToProps)(ToolbarContainer);

export default ToolbarContainer;