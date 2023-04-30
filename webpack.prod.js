const Dotenv = require('dotenv-webpack');
const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    clean: true,
  },
  plugins: [new Dotenv({ path: './.env.production' })],
});
