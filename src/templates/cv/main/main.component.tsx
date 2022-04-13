import { WithAdditionalClassNameProps } from 'types';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { MainBlock } from './block/block.component';
import { useCV } from '../cv.provider';
import * as styles from './main.module.scss';

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
