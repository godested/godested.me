import { Children, PropsWithChildren, ReactElement } from 'react';
import * as styles from './list.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
export function AsideList({ children }: PropsWithChildren<{}>): ReactElement {
  return (
    <ul className={styles.asideList}>
      {Children.map(children, (child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={styles.asideListItem}>
          {child}
        </li>
      ))}
    </ul>
  );
}

export namespace AsideList {
  export type ItemWithIconProps = PropsWithChildren<{
    icon: ReactElement;
  }>;

  export function ItemWithIcon({
    children,
    icon,
  }: ItemWithIconProps): ReactElement {
    return (
      <div className={styles.itemWithIcon}>
        <div className={styles.itemWithIconIcon}>{icon}</div>
        <div className={styles.itemWithIconContent}>{children}</div>
      </div>
    );
  }
}
