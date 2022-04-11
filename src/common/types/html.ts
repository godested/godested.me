import { JSXElementConstructor } from 'react';

export type TagName = keyof JSX.IntrinsicElements;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ComponentType<T = {}> =
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<T>;
