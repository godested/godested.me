import { ReactElement } from 'react';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import * as styles from './cv.module.scss';
import { DownloadButton } from './download-button/download-button.component';

// TODO: dynamic url for download button
export default function CVComponent(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <article className={styles.content}>
        <AsideComponent asideClassName={styles.aside} />
        <MainComponent mainClassName={styles.main} />
        <div className={styles.downloadButtonContainer}>
          <DownloadButton className={styles.downloadButton} url="/cv.pdf" />
        </div>
      </article>
    </div>
  );
}
