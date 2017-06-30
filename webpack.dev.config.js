const path = require('path');
const webpack = require('webpack');
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
    publicPath: path.join(__dirname, entry.publicPath),
    filename: '[name].bundle.js',
  },
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/,loader: "style-loader!css-loader" },
        { test: /\.scss$/,loader: "style-loader!css-loader!sass-loader" },
        {test: /\.vue$/,loader: 'vue-loader'},
        { test: /\.(png|jpg|gif)$/,loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]'}
      ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name : 'vendor'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devtool: "source-map",
  watch:true
};