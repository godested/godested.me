import { ReactElement } from 'react';
import { SVGDefs } from 'components/svg-defs';
import {
  GatsbyAssetImage,
  GatsbyAssetImageProps,
} from 'components/gatsby-asset-image';
import classNames from 'classnames';
import * as styles from './company-icon.module.scss';

export function CompanyIcon({
  className,
  ...restProps
}: GatsbyAssetImageProps): ReactElement {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={styles.svg}
      >
        <SVGDefs singleton id="IconShape">
          <clipPath id="icon-shape" clipPathUnits="objectBoundingBox">
            <path
              d="M0.254,0.996 C0.194,0.994,0.162,0.984,0.14,0.975 C0.112,0.964,0.092,0.951,0.07,0.93 C0.049,0.909,0.036,0.888,0.025,0.86 C0.016,0.838,0.006,0.806,0.004,0.746 C0.001,0.682,0,0.663,0,0.5 C0,0.337,0.001,0.318,0.004,0.254 C0.006,0.194,0.016,0.162,0.025,0.14 C0.036,0.112,0.049,0.092,0.07,0.07 C0.091,0.049,0.112,0.036,0.14,0.025 C0.162,0.016,0.194,0.006,0.254,0.004 C0.318,0.001,0.337,0,0.5,0 C0.663,0,0.682,0.001,0.746,0.004 C0.806,0.006,0.838,0.016,0.86,0.025 C0.888,0.036,0.908,0.049,0.93,0.07 C0.951,0.091,0.964,0.112,0.975,0.14 C0.984,0.162,0.994,0.194,0.996,0.254 C0.999,0.318,1,0.337,1,0.5 C1,0.663,0.999,0.682,0.996,0.746 C0.994,0.806,0.984,0.838,0.975,0.86 C0.964,0.888,0.951,0.909,0.93,0.93 C0.909,0.951,0.888,0.964,0.86,0.975 C0.838,0.984,0.806,0.994,0.746,0.996 C0.682,0.999,0.663,1,0.5,1 C0.337,1,0.318,0.999,0.254,0.996"
              fill="#fff"
            />
          </clipPath>
        </SVGDefs>
      </svg>
      <GatsbyAssetImage
        {...restProps}
        // eslint-disable-next-line react/destructuring-assignment
        className={classNames(styles.icon, className)}
      />
    </>
  );
}
