import { GatsbyImage, GatsbyImageProps, getImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { InlineSVG } from 'components/inline-svg';
import { unwrap } from 'utils';
import { PropsOf } from 'types';
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
    if (source.svg) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: source.svg.content }}
          {...restProps}
          className={classNames(styles.svgContainer, restProps.className)}
        />
      );
    }

    return source.childSvgSprites ? (
      <InlineSVG
        source={source.childSvgSprites}
        {...(restProps as PropsOf<'svg'>)}
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
