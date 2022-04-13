import { ReactElement } from 'react';
import { PageProps } from 'gatsby';
import { Page } from 'components/page';
import { CV } from './types';
import CVComponent from './cv.component';
import { CVProvider } from './cv.provider';

export default function CVPage({
  pageContext,
}: PageProps<unknown, { cv: CV }>): ReactElement {
  return (
    <Page title={`${pageContext.cv.profile.name} CV`}>
      <CVProvider cv={pageContext.cv}>
        <CVComponent />
      </CVProvider>
    </Page>
  );
}
