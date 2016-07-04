import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {addPage, getPage} from '../actions'

import PageBuilder from '../components/page-builder';

const defaultPage = {
  id: 1,
  title: 'New Page Title',
  elements: []
};

/**
 * PageContainer - view controller for page
 *
 * @param {Object} props
 * @returns {React.Component}
 */
class PageBuilderContainer extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    createNewPage: PropTypes.func,
    router: PropTypes.object,
    params: PropTypes.object
  };

  componentWillMount() {
    let {params, router, createNewPage} = this.props;

    if (params.pageId === 'new') {
      createNewPage(defaultPage);
      return this;
    }
  }

  render() {
    let {currentPage} = this.props;

    return (
      <PageBuilder page={currentPage} />
    );
  }

}

// called when state change happens
const mapStateToProps = ({pages, elements}, {params}) => ({
  currentPage: (() => {
    let page = pages.find(page => page.id == params.pageId);

    if (params.pageId === 'new') {
      page = pages[pages.length - 1];
    }

    if (page) {
      page.elements = page.elements.map(elemId => {
        return elements.find(element => element.id === elemId);
      });
    }

    return page;
  })()
});

const mapDispatchToProps = {
  createNewPage: addPage
};

//// wrap PageContainer via dependency injection
PageBuilderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageBuilderContainer)
);

export default PageBuilderContainer;