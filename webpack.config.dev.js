const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

//our app third party dependencies
const VENDOR_LIBS = [
  'babel-polyfill', 'bootstrap', 'jquery', 'numeral', 'react', 'react-dom', 'react-redux',
  'react-router', 'react-router-redux', 'redux', 'redux-thunk', 'toastr'
];

const config = {
  //The entry point for the bundle.
  entry: {
    bundle: path.resolve(__dirname, 'src/index'),
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name][chunkhash].js'
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
      //this plugin will make sure there is no duplicate modules between vendor.js and bundle.js if there are it will remove them from bundle.js and put them in vendor.js
      new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
      }),
      //this plugin will insert the script tags for bundle.js and vendor.js in our index.html
      new htmlWebpackPlugin({
            template: 'src/index.html' //if we do not specifiy a template, it will use the default one
      }),
      //when reactjs runs it looks for this window scoped variable called process.env.NODE_ENV,
      //if the value of this varaible is production react will not do too many error checking procedures,
      //which also takes too long to run.
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
            noInfo: false,
            debug: true,
            devtool: 'inline-source-map',
            target: 'web',
        }
      })
  ]
};

module.exports = config;
