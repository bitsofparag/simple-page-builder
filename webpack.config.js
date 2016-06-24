// Load utils
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const merge = require('webpack-merge');

// external configs
const devServer = require('./config/dev-server');

// local configs
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

const TARGET = process.env.npm_lifecycle_event;

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
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Page Builder Demo',
      template: 'index.ejs'
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
  case 'build':
    config = merge(common, {});
    break;
  default:
    config = merge(common, devServer({
      host: process.env.HOST,
      port: process.env.PORT
    }));
    break;
}

module.exports = validate(config);
