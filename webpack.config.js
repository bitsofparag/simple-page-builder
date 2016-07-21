// Load utils
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const merge = require('webpack-merge');

// external configs
const devServerConfig = require('./config/dev-server.webpack.config');

// local configs
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
  htmlTemplate: path.join(__dirname, 'index.ejs')
};

let TARGET = process.env.NODE_ENV || 'development';
if (/production/.test(process.env.npm_lifecycle_event)) {
  TARGET = 'production';
}
process.env.BABEL_ENV = TARGET;

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/assets/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Page Builder Demo',
      template: PATHS.htmlTemplate
    }),

    new webpack.DefinePlugin({
      'process.env.MODE': JSON.stringify(TARGET)
    })
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders:['babel?cacheDirectory'], include: PATHS.app}
    ]
  }
};


// branching out config
let config;
switch(TARGET) {
  case 'production':
    config = merge.smart(common, {
    });
    break;

  case 'development':
  default: // `develop`
    config = merge.smart(common, devServerConfig());
    break;
}


module.exports = validate(config);
