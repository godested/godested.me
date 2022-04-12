import { Context, useContext } from 'react';
import { unwrap } from './unwrap';

export function createUseContext<T>(
  context: Context<T>,
  errorMessage = `createUseContext: useContext(${context.displayName}) must be used within corresponding Provider`,
): () => NonNullable<T> {
  return () => {
    return unwrap(useContext(context as Context<T | undefined>), errorMessage);
  };
}
