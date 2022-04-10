import { isSomething } from './is-it';

// applies mapper function to `optionalValue` if it contains value, otherwise returns undefined
export function optionalMap<T, U>(
  optionalValue: T | undefined | null,
  mapper: (nonOpt: NonNullable<T>) => U,
): U | undefined;

export function optionalMap<T, V>(
  optionalValue: T | undefined | null,
  mapper: (nonOpt: NonNullable<T>) => V,
  defaultValue: V,
): V;

// applies mapper function to `optionalValue` if it contains value, otherwise returns default value
export function optionalMap<T, V, U extends V, P extends V>(
  optionalValue: T | undefined | null,
  mapper: (nonOpt: NonNullable<T>) => U,
  defaultValue: P,
): V;

export function optionalMap<T, U>(
  optionalValue: T | undefined | null,
  mapper: (nonOpt: NonNullable<T>) => U,
  defaultValue?: U,
): U | undefined {
  return isSomething(optionalValue) ? mapper(optionalValue) : defaultValue;
}
