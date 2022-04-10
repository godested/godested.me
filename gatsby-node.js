/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { renderers } = require('./renderers');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ actions }) => {
  renderers.forEach((renderer) => renderer(actions.createPage));
};
