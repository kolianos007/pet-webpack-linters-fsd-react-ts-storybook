const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');

const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [new Dotenv({ path: './.env.development' })],
});
