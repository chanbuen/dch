const path = require('path')

module.exports = {
  entry: ['./client/index.js'],
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, './public')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015']
        }
      }
    ]
  }
}