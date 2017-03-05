const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  //The entry point for the bundle.
  entry: {
    bundle: path.resolve(__dirname, 'src/index')
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader', //here we are selecting the loader
        test: /\.js$/, //and here we specify which file the loader will process
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader'
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
      //this plugin will insert the script tags for bundle.js and vendor.js in our index.html
      new htmlWebpackPlugin({
            template: 'src/index.html' //if we do not specifiy a template, it will use the default one
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
            noInfo: false,
            debug: true,
            devtool: 'inline-source-map',
            target: 'web'
        }
      })
  ]
};

module.exports = config;
