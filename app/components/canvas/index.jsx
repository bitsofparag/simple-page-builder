import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';
import HtmlElement from '../html-element';

import getStyles from './styles';

let findCurrentPageElement = (id, elements) => {
  return elements.find(element => element.id === id);
};

let getHtmlElements = (page, elements) => {
  if (!page.elements || page.elements.length === 0) {
    return (<h4>No content available</h4>);
  }

  return page.elements.map(elementId => <HtmlElement
    key={elementId}
    element={findCurrentPageElement(elementId, elements)}
  />);
};

let Canvas = ({page, theme, elements}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <PageTitle title={page && page.title} />
    {getHtmlElements(page, elements)}
  </div>);
};

Canvas.propTypes = {
  page: PropTypes.object,
  theme: PropTypes.object
};

export default Canvas;