/* eslint-disable import/no-extraneous-dependencies */
import { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { renderers } from './renderers';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  stage,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });

  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        runtimeChunk: {
          name: 'webpack-runtime',
        },
        splitChunks: {
          name: false,
          cacheGroups: {
            styles: {
              name: 'common',
              test: /\.(css|scss)$/,
              chunks: 'initial',
              enforce: true,
            },
          },
        },
      },
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async (...args) => {
  await Promise.all(renderers.map((renderer) => renderer(...args)));
};
