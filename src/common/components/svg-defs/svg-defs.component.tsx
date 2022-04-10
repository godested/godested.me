import { ReactElement, SVGProps } from 'react';
import * as styles from './svg-defs.module.scss';

export function SVGDefs({
  children,
  ...props
}: Omit<SVGProps<SVGSVGElement>, 'className'>): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={styles.svgDefs}
    >
      <defs>{children}</defs>
    </svg>
  );
}
