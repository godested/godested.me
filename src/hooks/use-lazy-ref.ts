import { useRef } from 'react';

type LazyRefResult<T> = { resolved: false } | { resolved: true; value: T };
const emptyLazyRefResult = { resolved: false } as const;
/**
 * internal utility hook
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
 *
 * - why not `useMemo`?
 * it does not guarantee same instance
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 *
 * - why not `useState`?
 * it's possible to use state factory `useState(() => factory())`
 * but `useRef` should be slightly more optimal because it's not related to re-rendering
 * (which we don't need anyway)
 *
 * compied from https://github.com/Kukkimonsuta/inversify-react/pull/13/files
 */
export function useLazyRef<T>(resolveValue: () => T): T {
  // using explicit `LazyRefResult` instead of `null` or `undefined` to ensure exactly single factory call
  const serviceRef = useRef<LazyRefResult<T>>(emptyLazyRefResult);
  if (!serviceRef.current.resolved) {
    serviceRef.current = {
      resolved: true,
      value: resolveValue(),
    };
  }
  return serviceRef.current.value;
}
