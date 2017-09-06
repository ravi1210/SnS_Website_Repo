var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");
//var NAV = path.resolve(__dirname, "node_modules/nav");
 
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
    
  },
  module: {
            loaders: [
      {
        include: DEV,//NAV
        loader: "babel-loader",
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
     new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
     new webpack.HotModuleReplacementPlugin()
  ],
};
 
module.exports = config;
