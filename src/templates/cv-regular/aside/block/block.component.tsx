import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { WithOptionalClassNameProps } from 'types';
import { isSomething } from 'utils';
import { Typography } from 'components/typography';
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
    <section className={classNames(styles.block, className)}>
      {isSomething(title) && (
        <Typography
          variant={Typography.Variant.CaptionSM}
          fontColor={Typography.Color.DarkGray}
          className={styles.title}
        >
          {title}
        </Typography>
      )}
      {children}
    </section>
  );
}
