import { ReactElement } from 'react';
import { PropsOf } from 'types';
import { useInlineSvgSprite } from './inline-svg-provider.component';

export type InlineSVGProps = Readonly<{
  source: SVGSource;
}> &
  PropsOf<'svg'>;

export function InlineSVG({
  source,
  ...restProps
}: InlineSVGProps): ReactElement {
  const { id } = useInlineSvgSprite(source.url);

  return (
    <svg
      viewBox={source.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <use xlinkHref={id} data-sprite-url={source.url} />
    </svg>
  );
}
