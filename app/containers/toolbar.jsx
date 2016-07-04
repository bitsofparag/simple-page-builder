import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import ToolbarButton from '../components/toolbar-button';

import {addElement} from '../actions';

import {getElementTypes} from '../components/element';

class ToolbarContainer extends Component {
  static propTypes = {
    currentPageId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    let {onClick, currentPageId} = this.props;

    return (<div>
      {getElementTypes().map(type =>
        <ToolbarButton
          key={type}
          type={type}
          onClick={onClick(type, currentPageId)} />
      )}
    </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick(type, currentPageId) {
    return (event) => {
      event.preventDefault();
      dispatch(addElement(type, currentPageId));
    };
  }
});

ToolbarContainer = connect(null, mapDispatchToProps)(ToolbarContainer);

export default ToolbarContainer;