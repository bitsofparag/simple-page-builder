import React, {PropTypes, Component} from 'react';

import {connect} from 'react-redux';

import {keys} from '../stores/keys';

import {addPage} from '../actions'

import Canvas from './canvas';

// convenience methods

//let defaultPage = {
//  title: 'New page title',
//  elements: []
//};
//
//let filterCurrentPage = (pages) => {
//  let index = keys('page').currentOrder;
//  let currentPage = pages.slice(index - 1, 1);
//
//  return currentPage[0];
//};
//
//let filterCurrentElements = (elementIds, elements) => {
//  let picked = elements.map(element => elementIds.indexOf(element.id) > -1);
//
//  return picked;
//};

/**
 * PageContainer - view controller for page
 *
 * @param {Object} props
 * @returns {React.Component}
 */

class PageContainer extends Component {

  //componentWillMount() {
  //  if (!this.props.page) {
  //    console.log('no page found. creating new with onLoad')
  //    this.props.onLoad();
  //  }
  //}


  render() {
    let {page, elements, params} = this.props;

    console.log('rendering page with', params);

    if (!page) {
      return <div>Loading canvas...</div>
    }

    return (
      <Canvas page={page} elements={elements} />
    );
  }

};


//let mapStateToProps = (state, ownProps) => {
//  console.log('mapStateToProps', state, ownProps);
//  let currentPage = filterCurrentPage(state.pages, ownProps.page);
//  let elementsInPage = state.elements;
//
//  if (currentPage) {
//    elementsInPage = filterCurrentElements(
//      currentPage.elements, state.elements
//    );
//  }
//
//  return {
//    page: currentPage,
//    elements: elementsInPage
//  };
//};
//
////let mapDispatchToProps = (dispatch) => ({
////  onLoad: () => dispatch(addPage(defaultPage))
////});
//
//// wrap PageContainer via dependency injection
PageContainer = connect()(PageContainer);

export default PageContainer;