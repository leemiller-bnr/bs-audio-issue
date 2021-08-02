const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  target: 'node',
  resolve: {
    extensions: ['.html', '.js']
  },
  module: {
    rules: [{}]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        context: '../client/build',
        from: '**',
        to: './client'
      }, {
        context: './assets',
        from: '**',
        to: './assets'
      }]
    })
  ]
}
