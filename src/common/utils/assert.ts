export function assertTrue(x: false, errorMessage: string): never;
export function assertTrue(x: boolean, errorMessage: string): asserts x is true;
export function assertTrue(
  x: boolean,
  errorMessage: string,
): asserts x is true {
  if (!x) {
    throw new Error(`assertTrue: ${errorMessage}`);
  }
}

/**
 * TypeScript-specific utility function to help with execution flow,
 * e.g. can be used to create exhaustive switch.
 *
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
export function assertNever(value: never, message = `${value}`): never {
  throw new Error(`assertNever: ${message}; value: ${value}`);
}

export function assertExists<T>(
  x: T,
  errorMessage: string,
): asserts x is NonNullable<T> {
  // Quick comparison with both undefined and null
  // eslint-disable-next-line eqeqeq
  if (x == null) {
    throw new Error(`assertExists: ${errorMessage}`);
  }
}
