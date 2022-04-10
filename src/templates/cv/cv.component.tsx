import { ReactElement } from 'react';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import * as styles from './cv.module.scss';

export default function CVComponent(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <article className={styles.content}>
        <AsideComponent asideClassName={styles.aside} />
        <MainComponent mainClassName={styles.main} />
      </article>
    </div>
  );
}
