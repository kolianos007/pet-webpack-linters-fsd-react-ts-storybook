const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpackConfig = require('../webpack.config');
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const custom = require('../webpack.config');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    const mergedConfig = merge(config, {
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            include: resolve(__dirname, '../src'),
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-react')],
                  plugins: [
                    require.resolve('@babel/plugin-proposal-class-properties'),
                    require.resolve('@babel/plugin-proposal-object-rest-spread'),
                    require.resolve('@babel/plugin-transform-runtime'),
                  ],
                },
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          ...custom.module.rules.filter((rule) => rule.test.source !== '\\.svg$' && rule.test.source !== '\\.css$'),
        ],
      },
      plugins: [
        ...config.plugins,
        new ForkTsCheckerWebpackPlugin({
          async: false,
          typescript: {
            configFile: resolve(__dirname, '../tsconfig.json'),
          },
        }),
      ],
    });
    return mergedConfig;
  },
};
