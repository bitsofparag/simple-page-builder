const webpack = require('webpack');

const devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      inline: true,
      hot: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};

module.exports = devServer;