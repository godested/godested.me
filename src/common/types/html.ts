export type TagName = keyof JSX.IntrinsicElements;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ComponentType<P = {}> = TagName | React.ComponentType<P>;
