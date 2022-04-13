import { ReactElement, ReactSVG } from 'react';

export type SVGDefsProps = Readonly<
  {
    children:
      | ReactElement<unknown, keyof ReactSVG>
      | readonly ReactElement<unknown, keyof ReactSVG>[];
  } & ({ singleton: true; id: string } | { singleton?: undefined })
>;

/* eslint-disable react/destructuring-assignment */
export function SVGDefs(props: SVGDefsProps): ReactElement | null {
  // TODO: singleton
  return <defs>{props.children}</defs>;
}
/* eslint-enable */
