import React, {PropTypes} from 'react';

// components
import PageTitle from '../page-title';
import HtmlElement from '../html-element';

import getStyles from './styles';

let getHtmlElements = (page) => {
  if (!page) {
    return (<h4>No content available</h4>);
  }

  return page.elements.map(element => <HtmlElement key={element.id} element={element} />);
};

let Canvas = ({page, theme}) => {
  const styles = getStyles(theme);

  return (<div style={styles.block}>
    <PageTitle title={page && page.title} />
    {getHtmlElements(page)}
  </div>);
};

Canvas.propTypes = {
  pages: PropTypes.array,
  theme: PropTypes.object
};

export default Canvas;