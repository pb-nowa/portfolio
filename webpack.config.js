const path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};