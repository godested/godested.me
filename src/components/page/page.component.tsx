import { PropsWithChildren, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { WithOptionalClassNameProps } from 'types';
import { ThemeProvider } from '../theme';

export type PageProps = Readonly<
  PropsWithChildren<{
    title?: string;
  }>
> &
  WithOptionalClassNameProps<'rootClassName'>;

export function Page({
  title,
  rootClassName,
  children,
}: PageProps): ReactElement {
  return (
    <>
      <Helmet
        title={title}
        defaultTitle="@godested"
        titleTemplate="%s · @godested"
      >
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        <html className={rootClassName} />
      </Helmet>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
