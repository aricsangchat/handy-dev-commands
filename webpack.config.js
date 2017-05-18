const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./app/index.js', './app/app.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '/dist'
        })
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Handy Dev Commands',
    template: 'index.ejs',
    minify: {
      collapseWhitespace: true
    },
    hash: true
  }),
  new ExtractTextPlugin({
    filename: 'app.css',
    disable: false,
    allChunks: true
  }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
};
