import { Children, ElementType, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { PolymorphicComponentProps, WithOptionalClassNameProps } from 'types';
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
  export function ItemWithIcon<T extends ElementType>(
    props: PolymorphicComponentProps<
      T,
      PropsWithChildren<{
        icon: ReactElement;
      }>
    > &
      WithOptionalClassNameProps,
  ): ReactElement {
    const {
      as: ComponentToRender = 'div',
      children,
      className,
      icon,
      ...restProps
    } = props;

    return (
      <ComponentToRender
        className={classNames(styles.itemWithIcon, className)}
        {...restProps}
      >
        <div className={styles.itemWithIconIcon}>{icon}</div>
        <div className={styles.itemWithIconContent}>{children}</div>
      </ComponentToRender>
    );
  }
}
