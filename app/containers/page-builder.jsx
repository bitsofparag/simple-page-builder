import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {newPage} from '../actions';

import PageBuilder from '../components/page-builder';

const defaultPage = {
  title: 'New Page Title',
  elements: []
};

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
  }

  static propTypes = {
    createNewPage: PropTypes.func,
    router: PropTypes.object,
    params: PropTypes.object
  };

  componentWillMount() {
    let {params, createNewPage} = this.props;

    if (params.pageId === 'new') {
      createNewPage(defaultPage);
    }
  }

  /**
   * NOTE: There seems to be an odd behavior where currentPage is undefined even
   * though the state is updated with a valid currentPage. Hence the Loader
   *
   * @returns {XML}
   */
  render() {
    let {currentPage, elements} = this.props;

    if (!currentPage) {
      return <Loader />
    }

    return <PageBuilder page={currentPage} elements={elements} />;

  }
}

// called when state change happens
const mapStateToProps = (state, ownProps) => ({
  currentPage: state.currentPage,
  elements: state.elements
});

const mapDispatchToProps = {
  createNewPage: newPage
};


PageBuilderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageBuilderContainer)
);

export default PageBuilderContainer;