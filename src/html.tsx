import { ReactElement } from 'react';
import { getLoadScript } from 'components/theme';
import { RenderBodyArgs } from 'gatsby';

type HTMLProps = Readonly<{
  htmlAttributes: Parameters<RenderBodyArgs['setHtmlAttributes']>[0];
  headComponents: Parameters<RenderBodyArgs['setHeadComponents']>[0];
  bodyAttributes: Parameters<RenderBodyArgs['setBodyAttributes']>[0];
  preBodyComponents: Parameters<RenderBodyArgs['setPreBodyComponents']>[0];
  postBodyComponents: Parameters<RenderBodyArgs['setPostBodyComponents']>[0];
  body: string;
}>;

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}: HTMLProps): ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        <script dangerouslySetInnerHTML={{ __html: getLoadScript() }} />
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
