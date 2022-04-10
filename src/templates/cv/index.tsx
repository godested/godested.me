import { ReactElement } from 'react';
import { PageProps } from 'gatsby';
import { Page } from 'common/components/page';
import { CV } from './types';
import CVComponent from './cv.component';
import * as styles from './index.module.scss';
import { CVProvider } from './cv.provider';

export default function CVPage({
  pageContext,
}: PageProps<unknown, CV>): ReactElement {
  return (
    <Page title={`${pageContext.profile.name} CV`} rootClassName={styles.root}>
      <CVProvider cv={pageContext}>
        <CVComponent />
      </CVProvider>
    </Page>
  );
}
