import { ReactElement } from 'react';
import { RenderBodyArgs } from 'gatsby';
import { getLoadScript } from 'components/theme';
import { SPRITES_NODE_ID } from 'components/inline-svg';

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
        {process.env['NODE_ENV'] === 'development' && (
          <div id={SPRITES_NODE_ID} />
        )}
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
