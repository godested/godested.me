import { PropsWithChildren, ReactElement, useEffect } from 'react';
import classNames from 'classnames';
import { RootClassName } from 'components/root-classname';
import { useDisposable, useLazyRef } from 'hooks';
import { isSafari, ExpectedRef } from 'utils';
import { WithOptionalClassNameProps } from 'types';
import { HeroCanvas } from './hero-canvas';
import * as styles from './hero.module.scss';

export function Hero({
  children,
  className,
}: PropsWithChildren<WithOptionalClassNameProps>): ReactElement {
  const heroCanvasRef = useLazyRef(
    () => new ExpectedRef<HTMLCanvasElement>('hero-canvas'),
  );

  useDisposable({
    onEffect: ({ addDisposable }) => {
      addDisposable(new HeroCanvas(heroCanvasRef.node));
    },
  });

  useEffect(() => {
    if (isSafari()) {
      heroCanvasRef.node.classList.add(styles.heroCanvasSafariFix);
    }
  }, []);

  return (
    <div className={classNames(styles.hero, className)}>
      <RootClassName className={styles.root} />
      <canvas ref={heroCanvasRef.update} className={styles.heroCanvas} />
      <div className={styles.heroBody}>{children}</div>
    </div>
  );
}
