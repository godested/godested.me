import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { WithOptionalClassNameProps } from 'common/types';

export type PageProps = Readonly<
  PropsWithChildren<{
    title?: string;
  }>
> &
  WithOptionalClassNameProps<'rootClassName'>;

export function Page({ title, rootClassName, children }: PageProps) {
  return (
    <>
      {/* TODO: Weird type error */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Helmet
        title={title}
        defaultTitle="@godested"
        titleTemplate="%s · @godested"
      >
        {/* eslint-disable-next-line jsx-a11y/html-has-lang */}
        <html className={rootClassName} />
      </Helmet>
      {children}
    </>
  );
}
