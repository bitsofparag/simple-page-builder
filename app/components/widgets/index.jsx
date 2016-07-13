import React, {PropTypes} from 'react';

const htmlElementFileName = /([^\/]+)\.jsx?$/;
const htmlElementReqContext = require.context(
  './atoms', false, /\.\/[^/]+\.jsx?$/
);

let widgets = {};
export default widgets;

htmlElementReqContext.keys().forEach(path => {
  let htmlElementName = path.match(htmlElementFileName)[1];
  widgets[htmlElementName] = htmlElementReqContext(path).default;
});

// with Webpack 2
//System.import('./atoms/' + htmlElementFileName).then(HtmlElement => {
//  widgets[htmlElementFileName] = HtmlElement;
//});