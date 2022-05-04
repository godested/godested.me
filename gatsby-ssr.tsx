/* eslint-disable no-param-reassign */
import { GatsbySSR } from 'gatsby';
import { AppWrapper } from 'components/app-wrapper';

export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  if (process.env['NODE_ENV'] !== 'production') {
    return;
  }

  const headComponents = getHeadComponents()
    .map((element: any) => {
      if (element.type === 'style' && element?.props['data-href']) {
        element.type = 'link';
        element.props.href = element.props['data-href'];
        element.props.rel = 'stylesheet';
        element.props.type = 'text/css';

        delete element.props['data-href'];
        delete element.props.dangerouslySetInnerHTML;
      }

      return element;
    })
    // Common styles must be at top
    .sort((a: any) => {
      if (a.type === 'link' && /^\/common\..+/.test(a.props.href)) {
        return -1;
      }

      return 0;
    });

  replaceHeadComponents(headComponents);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <AppWrapper>{element}</AppWrapper>;
};
