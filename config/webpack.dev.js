const path = require('path');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('public'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
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