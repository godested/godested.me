import { ReactElement, useEffect, useState } from 'react';
import { useScrollDirection } from 'use-scroll-direction';
import { ThemeToggler } from 'components/theme';
import classNames from 'classnames';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import * as styles from './cv.module.scss';
import { DownloadButton } from './download-button/download-button.component';

// TODO: dynamic url for download button
export default function CVComponent(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <article className={styles.content}>
          <AsideComponent asideClassName={styles.aside} />
          <MainComponent mainClassName={styles.main} />
        </article>
        <Controls />
      </div>
    </div>
  );
}

function Controls(): ReactElement {
  const { scrollDirection } = useScrollDirection();

  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    if (scrollDirection === 'DOWN') {
      setIsScrolledDown(true);
      return;
    }

    if (scrollDirection === 'UP') {
      setIsScrolledDown(false);
    }
  }, [scrollDirection]);

  return (
    <div
      className={classNames(
        styles.controls,
        isScrolledDown && styles.controlsScrollingDown,
      )}
    >
      <ThemeToggler className={styles.themeToggler} />
      <DownloadButton url="/cv.pdf" />
    </div>
  );
}
