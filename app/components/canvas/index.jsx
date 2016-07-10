import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';
import widgets from '../widgets';

import getStyles from './styles';

let findCurrentPageElement = (id, elements) => {
  return elements.find(element => element.id === id);
};

let getHtmlElements = (page, allElements) => {
  if (!page.elements || page.elements.length === 0) {
    return (<h4>No content available</h4>);
  }

  return page.elements.map(elementId => {
    let element = findCurrentPageElement(elementId, allElements);

    return React.createElement(widgets[element.type], {
      key: elementId,
      element: element
    });
  });
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