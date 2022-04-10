import { PropsWithChildren, ReactElement, useEffect } from 'react';
import classNames from 'classnames';
import { useLazyRef } from 'common/hooks';
import { WithOptionalClassNameProps } from 'common/types';
import { ExpectedRef } from 'common/utils/ref';
import { HeroCanvas } from './hero-canvas';
import * as styles from './hero.module.scss';

export function Hero({
  children,
  className,
}: PropsWithChildren<WithOptionalClassNameProps>): ReactElement {
  const canvasRef = useLazyRef(
    () => new ExpectedRef<HTMLCanvasElement>('hero-canvas'),
  );

  useEffect(() => {
    const canvas = new HeroCanvas(canvasRef.node);

    return () => canvas.dispose();
  });

  return (
    <div className={classNames(styles.hero, className)}>
      <canvas ref={canvasRef.update} className={styles.heroCanvas} />
      <div className={styles.heroBody}>{children}</div>
    </div>
  );
}
