const path = require('path')

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, './public'),
    filename: './bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      // query: {
      //     presets: ['es2015']
      //   }
      }
    ]
  }
}