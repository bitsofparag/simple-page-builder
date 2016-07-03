const webpack = require('webpack');

const DEV_SERVER_HOST = 'localhost';
const DEV_SERVER_PORT = 8001;

const devServerConfig = function (options) {
  return {
    devServer: {
      historyApiFallback: true,
      inline: true,
      hot: true,
      stats: 'errors-only',
      host: DEV_SERVER_HOST,
      port: DEV_SERVER_PORT
    },

    output: {
      publicPath: `http://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}/assets/`
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};

module.exports = devServerConfig;