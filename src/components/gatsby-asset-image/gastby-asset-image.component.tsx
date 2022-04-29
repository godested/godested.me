import classNames from 'classnames';
import { GatsbyImage, GatsbyImageProps, getImage } from 'gatsby-plugin-image';
import { unwrap } from 'utils';
import { GatsbyImageAsset } from './types';
import * as styles from './gatsby-asset-image.module.scss';

export type GatsbyAssetImageProps = Readonly<{
  source: GatsbyImageAsset;
  alt: string;
}> &
  Omit<GatsbyImageProps, 'image'>;

export function GatsbyAssetImage({
  source,
  alt,
  ...restProps
}: GatsbyAssetImageProps) {
  if (GatsbyImageAsset.isSVG(source)) {
    return source.svg ? (
      <div
        dangerouslySetInnerHTML={{ __html: source.svg.content }}
        {...restProps}
        className={classNames(styles.svgContainer, restProps.className)}
      />
    ) : (
      <img src={source.publicURL} alt={alt} {...restProps} />
    );
  }

  return (
    <GatsbyImage
      image={unwrap(
        getImage(source.childImageSharp.gatsbyImageData),
        `Couldn't get image ${alt}`,
      )}
      alt={alt}
      {...restProps}
    />
  );
}
