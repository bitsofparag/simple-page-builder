import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import ToolbarButton from '../components/toolbar-button';

import {addElement} from '../actions';

import element, {getElementTypes} from '../components/element';

const toolbarButtons = (onClick) => {
  return getElementTypes().map(typeObj => {
    let type = Object.keys(typeObj)[0];
    let displayName = Object.values(typeObj)[0];

    return (<ToolbarButton
      key={type}
      displayName={displayName}
      onClick={onClick(type)}/>);
  });
};

class ToolbarContainer extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    let {onClick} = this.props;

    return (<div>
      {toolbarButtons(onClick)}
    </div>);
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