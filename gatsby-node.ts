/* eslint-disable import/no-extraneous-dependencies */
import { GatsbyNode } from 'gatsby';
import { createRemoteImageNode } from 'gatsby-transformer-cloudinary';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { renderers } from './renderers';

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions: { createNode },
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  // In this example, "post" nodes sometimes have a "cover_photo_url" that's a link to an image.
  if (node.internal.type === 'post' && node['cover_photo_url']) {
    await createRemoteImageNode({
      url: node['cover_photo_url'] as string,
      parentNode: node,
      relationshipName: 'coverPhoto',
      createNode,
      createNodeId,
      createContentDigest,
      reporter,
    });
  }
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async (...args) => {
  await Promise.all(renderers.map((renderer) => renderer(...args)));
};
