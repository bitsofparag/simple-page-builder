import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {addPage, getPage} from '../actions'

import Canvas from '../components/canvas';


/**
 * PageContainer - view controller for page
 *
 * @param {Object} props
 * @returns {React.Component}
 */
class PageBuilderContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: undefined
    }
  }

  componentWillMount() {
    if (!this.state.currentPage) {
      this.props.router.replace('/');
      return this;
    }
  }

  render() {
    let {page, elements} = this.props;

    return (
      <Canvas page={page} elements={elements} />
    );
  }

}

const mapStateToProps = ({pages}, {params}) => ({
  currentPage: pages.find(page => page.id === params.pageId)
});

//// wrap PageContainer via dependency injection
PageBuilderContainer = withRouter(connect(mapStateToProps)(PageBuilderContainer));

export default PageBuilderContainer;