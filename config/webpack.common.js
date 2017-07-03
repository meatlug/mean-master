var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'app': './client/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.css']
  },

  module: {
    rules: [{
        test: /\.ts$/,
        use: [
          // Support for .ts files.
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('client', 'tsconfig.json')
            }
          }, 'angular2-template-loader'
        ]
      },
      // Support for *.json files.
      {
        test: /\.json$/,
        use: ['json-loader']
      },

      // support for .html 
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['file-loader?name=images/[name].[hash].[ext]']
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [helpers.root('src', 'styles')]
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./client'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
      filename: '[name].bundle.js',
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};