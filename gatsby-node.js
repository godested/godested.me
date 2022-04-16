/* eslint-disable import/no-extraneous-dependencies */
const { createRemoteImageNode } = require('gatsby-transformer-cloudinary');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { renderers } = require('./renderers');

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  // In this example, "post" nodes sometimes have a "cover_photo_url" that's a link to an image.
  if (node.internal.type === 'post' && node.cover_photo_url) {
    await createRemoteImageNode({
      url: node.cover_photo_url,
      parentNode: node,
      relationshipName: 'coverPhoto',
      createNode,
      createNodeId,
      createContentDigest,
      reporter,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async (actions) => {
  await Promise.all(renderers.map((renderer) => renderer(actions)));
};
