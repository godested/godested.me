import { WithAdditionalClassNameProps } from 'common/types';
import { ReactElement } from 'react';
import classNames from 'classnames';
import * as styles from './main.module.scss';
import { MainBlock } from './block/block.component';
import { useCV } from '../cv.provider';

export function MainComponent({
  mainClassName,
}: WithAdditionalClassNameProps<'mainClassName'>): ReactElement {
  const { body } = useCV();
  return (
    <main className={classNames(styles.main, mainClassName)}>
      {body.map((content, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MainBlock key={index} content={content} />
      ))}
    </main>
  );
}
