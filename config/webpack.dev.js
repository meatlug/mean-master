const path = require('path');
var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('public'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    contentBase: path.join(__dirname, '..', "public"),
    compress: true,
    port: 9000
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});