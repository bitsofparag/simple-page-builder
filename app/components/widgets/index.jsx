import React, {PropTypes} from 'react';

const htmlElementFileName = /([^\/]+)\.jsx?$/;
const htmlElementReqContext = require.context(
  './atoms', false, /\.\/[^/]+\.jsx?$/
);

let htmlElements = {};
export default htmlElements;

htmlElementReqContext.keys().forEach(path => {
  let htmlElementName = path.match(htmlElementFileName)[1];
  htmlElements[htmlElementName] = htmlElementReqContext(path).default;
});

// with Webpack 2
//System.import('./atoms/' + htmlElementFileName).then(HtmlElement => {
//  htmlElements[htmlElementFileName] = HtmlElement;
//});