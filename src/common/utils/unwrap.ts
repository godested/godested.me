import { assertExists } from './assert';
import { IfOptional, OptionalKeys } from './types';

// unwrap accepts only value of optional type
export function unwrap<T>(
  value: IfOptional<T>,
  assertion: string,
): NonNullable<T> {
  assertExists(value, assertion);
  return value;
}

// unwrapProp accepts only props with optional type
export function unwrapProp<T extends object, K extends OptionalKeys<T>>(
  obj: T,
  prop: K,
): NonNullable<T[K]> {
  return unwrap<T[K] | undefined | null>(obj[prop], 'unwrapProp');
}
