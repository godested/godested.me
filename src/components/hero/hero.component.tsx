import { PropsWithChildren, ReactElement, useEffect } from 'react';
import classNames from 'classnames';
import { RootClassName } from 'components/root-classname';
import { useLazyRef } from 'hooks';
import { WithOptionalClassNameProps } from 'types';
import { ExpectedRef } from 'utils/ref';
import Logo from 'assets/icons/logo.inline.svg';
import { HeroCanvas } from './hero-canvas';
import * as styles from './hero.module.scss';

export function Hero({
  children,
  className,
}: PropsWithChildren<WithOptionalClassNameProps>): ReactElement {
  const heroCanvasRef = useLazyRef(
    () => new ExpectedRef<HTMLCanvasElement>('hero-canvas'),
  );

  useEffect(() => {
    const heroCanvas = new HeroCanvas(heroCanvasRef.node);

    return () => {
      heroCanvas.dispose();
    };
  }, []);

  return (
    <div className={classNames(styles.hero, className)}>
      <RootClassName className={styles.root} />
      <Logo className={styles.logo} />
      <canvas ref={heroCanvasRef.update} className={styles.heroCanvas} />
      <div className={styles.heroBody}>{children}</div>
    </div>
  );
}
