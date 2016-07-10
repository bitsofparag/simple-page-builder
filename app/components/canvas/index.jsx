import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';
import widgets from '../widgets';

import getStyles from './styles';

/**
 *
 * @param page
 * @param allElements
 * @returns {*}
 */
let getHtmlElements = (page, allElements, styles) => {
  if (!page.elements || page.elements.length === 0) {
    return (<p style={styles.__placeholder}>
      Select from toolbar to add content
    </p>);
  }

  return page.elements.map(elementId => {
    let element = allElements.find(element => element.id === elementId);

    return React.createElement(widgets[element.type], {
      key: elementId,
      element: element
    });
  });
};

/**
 *
 * @param page
 * @param theme
 * @param elements
 * @returns {XML}
 * @constructor
 */
let Canvas = ({page, theme, elements}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <div style={styles.__tab}>
      <div style={styles.__tabBox}></div>
      <div style={styles.__tabTitle}>{page.title}</div>
    </div>
    <PageTitle title={page && page.title} />
    {getHtmlElements(page, elements, styles)}
  </div>);
};

Canvas.propTypes = {
  page: PropTypes.object,
  elements: PropTypes.array,
  theme: PropTypes.object
};

export default Canvas;