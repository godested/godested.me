import { ReactElement } from 'react';
import { PageProps } from 'gatsby';
import { Page } from 'components/page';
import { CVProvider, CV } from 'components/cv';
import { CVDocument } from './cv.component';

export default function CVPage({
  pageContext,
}: PageProps<unknown, { cv: CV }>): ReactElement {
  return (
    <Page title={`${pageContext.cv.profile.name} CV`}>
      <CVProvider cv={pageContext.cv}>
        <CVDocument />
      </CVProvider>
    </Page>
  );
}
