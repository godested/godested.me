import { GatsbyNode } from 'gatsby';
import { rendererCV } from './cv';

export const renderers: readonly NonNullable<GatsbyNode['createPages']>[] = [
  rendererCV,
];
