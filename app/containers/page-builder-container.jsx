import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import isEmptyObject from 'is-empty-object';

import {newPage, savePage} from '../actions';

import PageBuilder from '../components/page-builder';


const defaultPage = {
  title: 'New Page Title',
  elements: []
};

/**
 * Simple loader component to be displayed when canvas is still loading
 * @returns {XML}
 * @constructor
 */
const Loader = () => {
  return (<div>Loading your page</div>);
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

    this.handleSavePage = this.handleSavePage.bind(this);
    this.handleNewPage = this.handleNewPage.bind(this);
  }

  static propTypes = {
    createNewPage: PropTypes.func,
    savePage: PropTypes.func,
    router: PropTypes.object,
    params: PropTypes.object,
    currentPage: PropTypes.object,
    pages: PropTypes.array,
    elements: PropTypes.array
  };

  componentWillMount() {
    let {params, createNewPage} = this.props;

    if (params.pageId === 'new') {
      createNewPage(defaultPage);
    }
  }

  handleNewPage(e) {
    e.preventDefault();
    console.log('new page clicked');
  }

  handleSavePage(e) {
    e.preventDefault();
    let {savePage, currentPage} = this.props;
    savePage(currentPage);
  }

  /**
   * NOTE: There seems to be an odd behavior where currentPage is undefined even
   * though the state is updated with a valid currentPage. Hence the Loader
   *
   * @returns {XML}
   */
  render() {
    console.log('PAGEBUILDERCONTAINER rendering', this.props.currentPage, this.props.params);
    let {currentPage, elements, pages} = this.props;

    if (isEmptyObject(currentPage)) {
      return <Loader />
    }

    return (<PageBuilder
      pages={pages}
      currentPage={currentPage}
      elements={elements}
      handleSavePage={this.handleSavePage}
      handleNewPage={this.handleNewPage}
    />);

  }
}

// called when state change happens
const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  createNewPage: newPage,
  savePage: savePage
};


PageBuilderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageBuilderContainer)
);

export default PageBuilderContainer;