import { PropsWithChildren, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '../theme';

export type PageProps = Readonly<
  PropsWithChildren<{
    title?: string;
  }>
>;

export function Page({ title, children }: PageProps): ReactElement {
  return (
    <>
      <Helmet
        title={title}
        defaultTitle="@godested"
        titleTemplate="%s · @godested"
      />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
