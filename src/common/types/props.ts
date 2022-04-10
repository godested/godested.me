import { CSSClassName } from 'common/styles';

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
