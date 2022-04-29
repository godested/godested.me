import { ImageDataLike } from 'gatsby-plugin-image';

export type GatsbyImageAsset = GatsbyImageAsset.SVG | GatsbyImageAsset.Image;

export namespace GatsbyImageAsset {
  export type SVG = Readonly<{
    extension: 'svg';
    publicURL: string;
    svg?: { content: string };
  }>;

  export type Image = Readonly<{
    extension: string;
    childImageSharp: { gatsbyImageData: ImageDataLike };
  }>;

  export function isSVG(asset: GatsbyImageAsset): asset is SVG {
    return asset.extension === 'svg';
  }
}
