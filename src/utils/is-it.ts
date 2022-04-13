import { Primitive } from './types';

export function isPlainObject(item: unknown): item is PlainObject {
  if (!isNonArrayObject(item)) {
    return false;
  }

  const ctor = item.constructor;
  if (typeof ctor !== 'function') {
    return false;
  }

  const prot = ctor.prototype;
  if (Object.prototype.toString.call(prot) !== '[object Object]') {
    return false;
  }

  // eslint-disable-next-line no-prototype-builtins
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Plain object
  return true;
}

export type PlainObject = Record<string, unknown>;
export function isObject(
  item: unknown,
): item is PlainObject | readonly unknown[] {
  return item !== null && typeof item === 'object';
}

export function isNonArrayObject(
  item: unknown,
): item is NonNullable<PlainObject> {
  return isObject(item) && !Array.isArray(item);
}

/**
 * Tests to see if the object is an ES2015 (ES6) Promise, copied from rxjs
 */
export function isPromise(value: unknown): value is PromiseLike<unknown> {
  return (
    isNonArrayObject(value) &&
    // eslint-disable-next-line dot-notation
    typeof value['subscribe'] !== 'function' &&
    // eslint-disable-next-line dot-notation
    typeof value['then'] === 'function'
  );
}

export function isInteger(num: unknown): num is number {
  return typeof num === 'number' && Number.isInteger(num);
}

/**
 * Type guard (also great for `filter` operations), that doesn't like `undefined` or `null` values
 */
export function isSomething<T>(x: T | undefined | null): x is NonNullable<T> {
  // Quick comparison with both undefined and null
  return x != null;
}

export function isNothing<T>(x: T): x is Exclude<T, NonNullable<T>> {
  return x == null;
}

/**
 * Checks Iterable like entities whether it's empty or not
 *
 * isEmpty(null) => true
 * isEmpty(undefined) => true
 * isEmpty('') => true
 * isEmpty([]) => true
 * isEmpty('ABC') => false
 * isEmpty('[A, B]') => false
 */
export function isEmpty<T>(
  collection: Iterable<T> | null | undefined,
): boolean {
  if (collection == null) {
    return true;
  }

  const iterator = collection[Symbol.iterator]();
  return iterator.next().done === true;
}

export function isTrue(value: boolean): value is true {
  return value;
}

export function isFalse(value: boolean): value is false {
  return !value;
}

export const isString = (item: unknown): item is string =>
  typeof item === 'string';
export const isNumber = (item: unknown): item is number =>
  typeof item === 'number';
export const isBoolean = (item: unknown): item is boolean =>
  typeof item === 'boolean';
export const isPrimitive = (item: unknown): item is Primitive =>
  isBoolean(item) || isString(item) || isNumber(item);
export const isEnum = <T>(EnumType: T) => {
  const isNumberEnumValue = (value: unknown) =>
    isNumber(value) && value in EnumType;
  const allValues = Object.values(EnumType);
  const validValues = new Set(
    allValues.filter(
      allValues.some(isNumberEnumValue) ? isNumberEnumValue : isString,
    ),
  );
  return (item: unknown): item is T[keyof T] => validValues.has(item);
};
