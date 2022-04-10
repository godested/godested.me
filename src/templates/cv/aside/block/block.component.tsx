import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { WithOptionalClassNameProps } from 'common/types';
import { isSomething } from 'common/utils';
import { Typography } from 'common/components/typography';
import * as styles from './block.module.scss';

type AsideBlockProps = Readonly<
  { title?: string } & PropsWithChildren<WithOptionalClassNameProps>
>;

export function AsideBlock({
  children,
  className,
  title,
}: AsideBlockProps): ReactElement {
  return (
    <div className={classNames(styles.block, className)}>
      {isSomething(title) && (
        <Typography
          variant={Typography.Variant.Caption}
          fontColor={Typography.Color.DarkGray}
          className={styles.title}
        >
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
}
