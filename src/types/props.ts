import {
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
} from 'react';
import { CSSClassName } from 'styles';
import { Primitive } from 'utils';

type AllowedClassNameKey =
  | 'className'
  | `${string}ClassName`
  | `${string}ClassName`[];

// Type util to declare additional className props for component.
// Specified keys must have `ClassName` suffix
// Examples:
// 1. WithAdditionalClassNameProps
//    { className: CSSClassName }
// 2. WithAdditionalClassNameProps<'containerClassName'>
//    { containerClassName: CSSClassName }
// 3. WithAdditionalClassNameProps<['listClassName', 'itemClassName']>
//    { listClassName: CSSClassName; itemClassName: CSSClassName}

export type WithAdditionalClassNameProps<
  TKey extends AllowedClassNameKey = 'className',
> = Readonly<{
  [K in TKey extends string ? TKey : TKey[number]]: CSSClassName;
}>;

export type WithOptionalClassNameProps<
  TKey extends AllowedClassNameKey = 'className',
> = Partial<WithAdditionalClassNameProps<TKey>>;

// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>> &
  (C extends keyof JSX.IntrinsicElements
    ? { [dataKey: `data-${string}`]: Primitive }
    : // eslint-disable-next-line @typescript-eslint/ban-types
      {});

// Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
// (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
// set of props.
export type ExtendableProps<
  ExtendedProps = unknown,
  OverrideProps = unknown,
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

// Allows for inheriting the props from the specified element type so that
// props like children, className & style work, as well as element-specific
// attributes like aria roles. The component (`C`) must be passed in.
export type InheritableElementProps<
  C extends ElementType,
  Props = unknown,
> = ExtendableProps<PropsOf<C>, Props>;

// A more sophisticated version of `InheritableElementProps` where
// the passed in `as` prop will determine which props can be included
export type PolymorphicComponentProps<C extends ElementType, Props = unknown> =
  | ({ as?: undefined } & Props)
  | InheritableElementProps<C, Props & { as: C }>;
