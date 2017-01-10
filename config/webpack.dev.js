const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = webpackMerge(commonConfig({env: ENV}), {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),

    new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
        }
      }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
