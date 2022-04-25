/* eslint-disable import/no-extraneous-dependencies */
import { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { renderers } from './renderers';

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
