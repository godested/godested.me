import { ReactElement, useEffect, useState } from 'react';
import { useScrollDirection } from 'use-scroll-direction';
import { ThemeToggler } from 'components/theme';
import classNames from 'classnames';
import { RootClassName } from 'components/root-classname';
import { AsideComponent } from './aside/aside.component';
import { DownloadButton } from './download-button/download-button.component';
import { MainBlock } from './main-block/main-block.component';
import { useCV } from './cv.provider';
import * as styles from './cv.module.scss';

// TODO: dynamic url for download button
export default function CVComponent(): ReactElement {
  const { body } = useCV();

  return (
    <RootClassName className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
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
