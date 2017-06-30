const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const entry =require('./webpack.entry.js');
module.exports ={
  entry:entry.entry,
  resolve:{
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.vue','.js','.scss','.css']
  },
  output: {
    path: path.join(__dirname, entry.path),
    filename: '[name].bundle.js',
  },
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { 
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader']
          })
        },
        { 
          test: /\.scss$/,
          loader:ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader','sass-loader']
            })
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
             loaders: {
              scss: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader','sass-loader']
              }), 
              sass:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader','sass-loader']
              })
            }
          }
        },
        { test: /\.(png|jpg|gif)$/,loader: 'file-loader?limit=8192&name=../img/[name].[ext]?[hash]'}
      ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name : 'vendor'// also can a array
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin("../css/[name].css")
  ]
};