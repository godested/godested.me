import { ReactElement, useEffect, useState } from 'react';
import { useScrollDirection } from 'use-scroll-direction';
import classNames from 'classnames';
import { ThemeToggler } from 'components/theme';
import { RootClassName } from 'components/root-classname';
import { useCV } from 'components/cv';
import { AsideComponent } from './aside';
import { MainBlock } from './main-block';
import { DownloadButton } from './download-button.component';
import * as styles from './cv.module.scss';

export function CVDocument(): ReactElement {
  const { body } = useCV();

  return (
    <RootClassName className={styles.root}>
      <div className={styles.wrapper}>
        <article className={styles.content}>
          <AsideComponent asideClassName={styles.aside} />
          <main className={styles.main}>
            {body.map((content, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MainBlock key={index} content={content} />
            ))}
          </main>
        </article>
        <Controls />
      </div>
    </RootClassName>
  );
}

function Controls(): ReactElement {
  const { pdfURL } = useCV();
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
      <DownloadButton url={pdfURL} />
    </div>
  );
}
