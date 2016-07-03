import React, {Component} from 'react';

import {connect} from 'react-redux';

import {addPage} from '../actions'

import Canvas from '../components/canvas';


/**
 * PageContainer - view controller for page
 *
 * @param {Object} props
 * @returns {React.Component}
 */
class PageBuilderContainer extends Component {

  render() {
    let {page, elements, params} = this.props;

    if (!page) {
      return <div>Loading canvas...</div>
    }

    return (
      <Canvas page={page} elements={elements} />
    );
  }

}

//// wrap PageContainer via dependency injection
PageBuilderContainer = connect()(PageBuilderContainer);

export default PageBuilderContainer;