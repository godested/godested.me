import { ReactElement } from 'react';
import classNames from 'classnames';
import { ThemeToggler } from 'components/theme';
import { RootClassName } from 'components/root-classname';
import { useCV } from 'components/cv';
import { ScrollDirection, useScrollDirection } from 'hooks';
import { AsideComponent } from './aside';
import { MainBlock } from './main-block';
import { DownloadButton } from './download-button.component';
import * as styles from './cv.module.scss';

export function CVDocument(): ReactElement {
  const { body } = useCV();

  return (
    <RootClassName className={styles.root}>
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <AsideComponent asideClassName={styles.aside} />
          <div className={styles.main}>
            {body.map((content, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MainBlock key={index} content={content} />
            ))}
          </div>
        </main>
        <Controls />
      </div>
    </RootClassName>
  );
}

function Controls(): ReactElement {
  const { pdfURL } = useCV();
  const scrollDirection = useScrollDirection({ threshold: 50 });

  return (
    <aside
      className={classNames(
        styles.controls,
        scrollDirection === ScrollDirection.Down &&
          styles.controlsScrollingDown,
      )}
    >
      <DownloadButton url={pdfURL} />
      <ThemeToggler className={styles.themeToggler} />
    </aside>
  );
}
